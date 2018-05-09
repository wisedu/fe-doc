import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import PcView from './pages/pc-view'
import IView from './pages/iview-view'
import MobileView from './pages/mobile-view'
import MobileProjectList from './pages/mobile-projectlist'
import MobileProject from './pages/mobile-project'
import Ceils from './pages/ceils'
import NotFoundComponent from './pages/NotFoundComponent'
import skinTools from './pages/skinTools'
import Portals from './pages/portals'
const READMEMobile = resolve => require(['./markdown/mobile/README.md'], resolve)
const ActionSheetMobile = resolve => require(['./markdown/mobile/action-sheet.md'], resolve)
const BadgeMobile = resolve => require(['./markdown/mobile/badge.md'], resolve)
const ButtonListMobile = resolve => require(['./markdown/mobile/button-list.md'], resolve)
const ButtonMobile = resolve => require(['./markdown/mobile/button.md'], resolve)
const CellSwipeMobile = resolve => require(['./markdown/mobile/cell-swipe.md'], resolve)
const CellMobile = resolve => require(['./markdown/mobile/cell.md'], resolve)
const CheckboxMobile = resolve => require(['./markdown/mobile/checkbox.md'], resolve)
const CommandBarMobile = resolve => require(['./markdown/mobile/command-bar.md'], resolve)
const DatetimePickerMobile = resolve => require(['./markdown/mobile/datetime-picker.md'], resolve)
const DatetimeSelectorMobile = resolve => require(['./markdown/mobile/datetime-selector.md'], resolve)
const DropdownMenusMobile = resolve => require(['./markdown/mobile/dropdown-menus.md'], resolve)
const EmapmFormMobile = resolve => require(['./markdown/mobile/emapm-form.md'], resolve)
const FieldMobile = resolve => require(['./markdown/mobile/field.md'], resolve)
const FileListMobile = resolve => require(['./markdown/mobile/file-list.md'], resolve)
const FixedButtonMobile = resolve => require(['./markdown/mobile/fixed-button.md'], resolve)
const HeaderMobile = resolve => require(['./markdown/mobile/header.md'], resolve)
const HrMobile = resolve => require(['./markdown/mobile/hr.md'], resolve)
const IconMobile = resolve => require(['./markdown/mobile/icon.md'], resolve)
const ImageMobile = resolve => require(['./markdown/mobile/image.md'], resolve)
const IndexListMobile = resolve => require(['./markdown/mobile/index-list.md'], resolve)
const IndicatorMobile = resolve => require(['./markdown/mobile/indicator.md'], resolve)
const InfiniteScrollMobile = resolve => require(['./markdown/mobile/infinite-scroll.md'], resolve)
const LayoutContainerMultipleMobile = resolve => require(['./markdown/mobile/layout-container-multiple.md'], resolve)
const LayoutContainerMobile = resolve => require(['./markdown/mobile/layout-container.md'], resolve)
const LayoutLeftRightMobile = resolve => require(['./markdown/mobile/layout-left-right.md'], resolve)
const LayoutSpacingMobile = resolve => require(['./markdown/mobile/layout-spacing.md'], resolve)
const LazyloadMobile = resolve => require(['./markdown/mobile/lazyload.md'], resolve)
const LoadmoreMobile = resolve => require(['./markdown/mobile/loadmore.md'], resolve)
const MessageBoxMobile = resolve => require(['./markdown/mobile/message-box.md'], resolve)
const NavbarMobile = resolve => require(['./markdown/mobile/navbar.md'], resolve)
const PaletteButtonMobile = resolve => require(['./markdown/mobile/palette-button.md'], resolve)
const PickerMobile = resolve => require(['./markdown/mobile/picker.md'], resolve)
const PopupMobile = resolve => require(['./markdown/mobile/popup.md'], resolve)
const ProgressMobile = resolve => require(['./markdown/mobile/progress.md'], resolve)
const PullDownMobile = resolve => require(['./markdown/mobile/pull-down.md'], resolve)
const PullUpMobile = resolve => require(['./markdown/mobile/pull-up.md'], resolve)
const RadioboxMobile = resolve => require(['./markdown/mobile/radiobox.md'], resolve)
const RangeMobile = resolve => require(['./markdown/mobile/range.md'], resolve)
const SearchMobile = resolve => require(['./markdown/mobile/search.md'], resolve)
const SelectMobile = resolve => require(['./markdown/mobile/select.md'], resolve)
const SideNavbarMobile = resolve => require(['./markdown/mobile/side-navbar.md'], resolve)
const SpinnerMobile = resolve => require(['./markdown/mobile/spinner.md'], resolve)
const StepsMobile = resolve => require(['./markdown/mobile/steps.md'], resolve)
const SwipeMobile = resolve => require(['./markdown/mobile/swipe.md'], resolve)
const SwitchMobile = resolve => require(['./markdown/mobile/switch.md'], resolve)
const SwitcherMobile = resolve => require(['./markdown/mobile/switcher.md'], resolve)
const TabContainerMobile = resolve => require(['./markdown/mobile/tab-container.md'], resolve)
const TabbarMobile = resolve => require(['./markdown/mobile/tabbar.md'], resolve)
const TextSelectMobile = resolve => require(['./markdown/mobile/text-select.md'], resolve)
const TextMobile = resolve => require(['./markdown/mobile/text.md'], resolve)
const TextareaMobile = resolve => require(['./markdown/mobile/textarea.md'], resolve)
const ToastMobile = resolve => require(['./markdown/mobile/toast.md'], resolve)
const TreeSelectorMobile = resolve => require(['./markdown/mobile/tree-selector.md'], resolve)
const TgDatabindPc = resolve => require(['./markdown/pc/tg-databind.md'], resolve)
const TgDatasourcePc = resolve => require(['./markdown/pc/tg-datasource.md'], resolve)
const TgDivPc = resolve => require(['./markdown/pc/tg-div.md'], resolve)
const TgLinkbuttonPc = resolve => require(['./markdown/pc/tg-linkbutton.md'], resolve)
const TgListviewPc = resolve => require(['./markdown/pc/tg-listview.md'], resolve)

Vue.use(Router)

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    Vue.component('README-mobile', READMEMobile);
Vue.component('action-sheet-mobile', ActionSheetMobile);
Vue.component('badge-mobile', BadgeMobile);
Vue.component('button-list-mobile', ButtonListMobile);
Vue.component('button-mobile', ButtonMobile);
Vue.component('cell-swipe-mobile', CellSwipeMobile);
Vue.component('cell-mobile', CellMobile);
Vue.component('checkbox-mobile', CheckboxMobile);
Vue.component('command-bar-mobile', CommandBarMobile);
Vue.component('datetime-picker-mobile', DatetimePickerMobile);
Vue.component('datetime-selector-mobile', DatetimeSelectorMobile);
Vue.component('dropdown-menus-mobile', DropdownMenusMobile);
Vue.component('emapm-form-mobile', EmapmFormMobile);
Vue.component('field-mobile', FieldMobile);
Vue.component('file-list-mobile', FileListMobile);
Vue.component('fixed-button-mobile', FixedButtonMobile);
Vue.component('header-mobile', HeaderMobile);
Vue.component('hr-mobile', HrMobile);
Vue.component('icon-mobile', IconMobile);
Vue.component('image-mobile', ImageMobile);
Vue.component('index-list-mobile', IndexListMobile);
Vue.component('indicator-mobile', IndicatorMobile);
Vue.component('infinite-scroll-mobile', InfiniteScrollMobile);
Vue.component('layout-container-multiple-mobile', LayoutContainerMultipleMobile);
Vue.component('layout-container-mobile', LayoutContainerMobile);
Vue.component('layout-left-right-mobile', LayoutLeftRightMobile);
Vue.component('layout-spacing-mobile', LayoutSpacingMobile);
Vue.component('lazyload-mobile', LazyloadMobile);
Vue.component('loadmore-mobile', LoadmoreMobile);
Vue.component('message-box-mobile', MessageBoxMobile);
Vue.component('navbar-mobile', NavbarMobile);
Vue.component('palette-button-mobile', PaletteButtonMobile);
Vue.component('picker-mobile', PickerMobile);
Vue.component('popup-mobile', PopupMobile);
Vue.component('progress-mobile', ProgressMobile);
Vue.component('pull-down-mobile', PullDownMobile);
Vue.component('pull-up-mobile', PullUpMobile);
Vue.component('radiobox-mobile', RadioboxMobile);
Vue.component('range-mobile', RangeMobile);
Vue.component('search-mobile', SearchMobile);
Vue.component('select-mobile', SelectMobile);
Vue.component('side-navbar-mobile', SideNavbarMobile);
Vue.component('spinner-mobile', SpinnerMobile);
Vue.component('steps-mobile', StepsMobile);
Vue.component('swipe-mobile', SwipeMobile);
Vue.component('switch-mobile', SwitchMobile);
Vue.component('switcher-mobile', SwitcherMobile);
Vue.component('tab-container-mobile', TabContainerMobile);
Vue.component('tabbar-mobile', TabbarMobile);
Vue.component('text-select-mobile', TextSelectMobile);
Vue.component('text-mobile', TextMobile);
Vue.component('textarea-mobile', TextareaMobile);
Vue.component('toast-mobile', ToastMobile);
Vue.component('tree-selector-mobile', TreeSelectorMobile);
Vue.component('tg-databind-pc', TgDatabindPc);
Vue.component('tg-datasource-pc', TgDatasourcePc);
Vue.component('tg-div-pc', TgDivPc);
Vue.component('tg-linkbutton-pc', TgLinkbuttonPc);
Vue.component('tg-listview-pc', TgListviewPc);
};

const router = new Router({
    mode: 'history',
    routes: [{"path":"/mobile","component":MobileView,"children":[{"name":"READMEMobile","component":READMEMobile,"path":"/"},{"name":"ActionSheetMobile","component":ActionSheetMobile,"path":"action-sheet"},{"name":"BadgeMobile","component":BadgeMobile,"path":"badge"},{"name":"ButtonListMobile","component":ButtonListMobile,"path":"button-list"},{"name":"ButtonMobile","component":ButtonMobile,"path":"button"},{"name":"CellSwipeMobile","component":CellSwipeMobile,"path":"cell-swipe"},{"name":"CellMobile","component":CellMobile,"path":"cell"},{"name":"CheckboxMobile","component":CheckboxMobile,"path":"checkbox"},{"name":"CommandBarMobile","component":CommandBarMobile,"path":"command-bar"},{"name":"DatetimePickerMobile","component":DatetimePickerMobile,"path":"datetime-picker"},{"name":"DatetimeSelectorMobile","component":DatetimeSelectorMobile,"path":"datetime-selector"},{"name":"DropdownMenusMobile","component":DropdownMenusMobile,"path":"dropdown-menus"},{"name":"EmapmFormMobile","component":EmapmFormMobile,"path":"emapm-form"},{"name":"FieldMobile","component":FieldMobile,"path":"field"},{"name":"FileListMobile","component":FileListMobile,"path":"file-list"},{"name":"FixedButtonMobile","component":FixedButtonMobile,"path":"fixed-button"},{"name":"HeaderMobile","component":HeaderMobile,"path":"header"},{"name":"HrMobile","component":HrMobile,"path":"hr"},{"name":"IconMobile","component":IconMobile,"path":"icon"},{"name":"ImageMobile","component":ImageMobile,"path":"image"},{"name":"IndexListMobile","component":IndexListMobile,"path":"index-list"},{"name":"IndicatorMobile","component":IndicatorMobile,"path":"indicator"},{"name":"InfiniteScrollMobile","component":InfiniteScrollMobile,"path":"infinite-scroll"},{"name":"LayoutContainerMultipleMobile","component":LayoutContainerMultipleMobile,"path":"layout-container-multiple"},{"name":"LayoutContainerMobile","component":LayoutContainerMobile,"path":"layout-container"},{"name":"LayoutLeftRightMobile","component":LayoutLeftRightMobile,"path":"layout-left-right"},{"name":"LayoutSpacingMobile","component":LayoutSpacingMobile,"path":"layout-spacing"},{"name":"LazyloadMobile","component":LazyloadMobile,"path":"lazyload"},{"name":"LoadmoreMobile","component":LoadmoreMobile,"path":"loadmore"},{"name":"MessageBoxMobile","component":MessageBoxMobile,"path":"message-box"},{"name":"NavbarMobile","component":NavbarMobile,"path":"navbar"},{"name":"PaletteButtonMobile","component":PaletteButtonMobile,"path":"palette-button"},{"name":"PickerMobile","component":PickerMobile,"path":"picker"},{"name":"PopupMobile","component":PopupMobile,"path":"popup"},{"name":"ProgressMobile","component":ProgressMobile,"path":"progress"},{"name":"PullDownMobile","component":PullDownMobile,"path":"pull-down"},{"name":"PullUpMobile","component":PullUpMobile,"path":"pull-up"},{"name":"RadioboxMobile","component":RadioboxMobile,"path":"radiobox"},{"name":"RangeMobile","component":RangeMobile,"path":"range"},{"name":"SearchMobile","component":SearchMobile,"path":"search"},{"name":"SelectMobile","component":SelectMobile,"path":"select"},{"name":"SideNavbarMobile","component":SideNavbarMobile,"path":"side-navbar"},{"name":"SpinnerMobile","component":SpinnerMobile,"path":"spinner"},{"name":"StepsMobile","component":StepsMobile,"path":"steps"},{"name":"SwipeMobile","component":SwipeMobile,"path":"swipe"},{"name":"SwitchMobile","component":SwitchMobile,"path":"switch"},{"name":"SwitcherMobile","component":SwitcherMobile,"path":"switcher"},{"name":"TabContainerMobile","component":TabContainerMobile,"path":"tab-container"},{"name":"TabbarMobile","component":TabbarMobile,"path":"tabbar"},{"name":"TextSelectMobile","component":TextSelectMobile,"path":"text-select"},{"name":"TextMobile","component":TextMobile,"path":"text"},{"name":"TextareaMobile","component":TextareaMobile,"path":"textarea"},{"name":"ToastMobile","component":ToastMobile,"path":"toast"},{"name":"TreeSelectorMobile","component":TreeSelectorMobile,"path":"tree-selector"},{"name":"CeilsMobile","component":Ceils,"path":"ceils"},{"name":"skinTools","component":skinTools,"path":"skinTools"}]},{"path":"/pc","component":PcView,"children":[{"name":"TgDatabindPc","component":TgDatabindPc,"path":"tg-databind"},{"name":"TgDatasourcePc","component":TgDatasourcePc,"path":"tg-datasource"},{"name":"TgDivPc","component":TgDivPc,"path":"tg-div"},{"name":"TgLinkbuttonPc","component":TgLinkbuttonPc,"path":"tg-linkbutton"},{"name":"TgListviewPc","component":TgListviewPc,"path":"tg-listview"},{"name":"portals","component":Portals,"path":"portals"}]},{"name":"home","component":Home,"path":"/"},{"name":"mobile-project","component":MobileProject,"path":"/mobile-project"},{"name":"mobile-projectlist","component":MobileProjectList,"path":"/mobile-projectlist"},{"name":"iview","component":IView,"path":"/iview"},{"component":NotFoundComponent,"path":"*"}]
  })

export default {install, router}