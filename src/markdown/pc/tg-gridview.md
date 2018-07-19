## tg-gridview

### 例子

#### 外部传递数据

```html
<div>
	<tg-gridview :field-column="3" :fields="searchfields" :columns="columns" :data="data" @on-change="reload" :loading="loading" @on-highlight="onSelectedRow" @on-selection-change="onSelectionChange">
           <div slot="toolbar-left">
	            	<Button type="primary" @click="openModal(true)" v-tg-funckey="'abc'">新增</Button>
	            <Button type="warning" @click="openModal()">修改</Button>
	            <Button type="info" v-tg-funckey="'1d,4d'" @click="viewIt">查看</Button>
	            |
	            <Button type="error" v-tg-funckey="'1d,4d'" @click="delIt">删除</Button>
           </div>
     </tg-gridview>
</div>
```

```js
(function (exports, turing) {
	var inst = new turing.DataAdapterFactory.create(pageMeta, "T_FUNA_USER_QUERY");
	var ClassImpl = {
		data:function(){
			var columns = inst.view("grid:table");
			columns.unshift({type: 'selection',width: 60,align: 'center'})
		    return {
		        columns: columns,
		        data:[],
		        fields: inst.view("form:form"),
		        searchfields: inst.view("search:form"),
		        isModalShow: false,
		        modalLoading: true,
		        formData:{},
		        currentRow: {},
		        selection: [],
		        loading: false,
		        readonly: false
		    }
		},
		created: function(){
			var that = this;
			inst.onFetching = function(status, result) {
				that.loading = result;
			}
			that.reload({index:1, size:10}, {}, [],"init");
	    },
	    methods:{
	        openModal: function(isNew){
	        		this.readonly = false;
	        		if (isNew) {
	        			this.formData = {};
	        			this.$set(this.formData, "WID", turing.uuid());
	        		} else {
	        			delete this.currentRow.PASSWORD;
	        			this.formData = this.currentRow;
	        		}
	            this.isModalShow = true;
	        },
	        ok: function(){
	        		if (this.readonly === true){
	        			this.isModalShow = false;
	        			return true;
	        		}
	        		var that = this;
	            this.$refs.form.validate(function(result) {
	                if (result === true) {
	                    inst.save(that.formData).then(function(){
	                    		that.reload({index:1, size:10}, {}, [],"ok");
	                    		that.isModalShow = false;
	                    })
	                } else {
		                	that.isModalShow = true;
		                	that.modalLoading = false;
	                }
	                // this.isModalShow = true;
	            })
	            return false
	        },
	        cancel: function(){

	        },
	        reload: function(pager, searchvalue, sorts, source) {
	        		var that = this;
	        		inst.pageNumber = pager.index;
	        		inst.pageSize = pager.size;
		        inst.findAll(searchvalue).then(function(results) {
		        		that.data = results;
		        })
	        },
	        onSelectedRow: function(newRow, oldRow) {
	        		this.currentRow = newRow;
	        },
	        delIt: function() {
	        		var params = this.selection.map(function(item) {
	        			return {WID:item.WID};
	        		})
	        		inst.delete({T_FUNA_USER_DELETE:JSON.stringify(params)});
	        		that.reload({index:1, size:10}, {}, [],"delete");
	        },
	        viewIt: function() {
	        		this.openModal(false);
	        		this.readonly = true;
	        },
	        onSelectionChange: function(selection) {
	        		this.selection = selection;
	        }
	    }
	}

	exports["emap-usermanager"].mixins = [ClassImpl]
})(window.turingform, window["tg-turing"]);

```
