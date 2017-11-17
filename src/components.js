import Vue from 'vue'
import Router from 'vue-router'
import PcView from './pages/pc-view'
import MobileView from './pages/mobile-view'
import Ceils from './pages/ceils'
const READMEMobile = resolve => require(['./markdown/mobile/README.md'], resolve)
const ActionSheetMobile = resolve => require(['./markdown/mobile/action-sheet.md'], resolve)
const BadgeMobile = resolve => require(['./markdown/mobile/badge.md'], resolve)
const ButtonMobile = resolve => require(['./markdown/mobile/button.md'], resolve)
const CellSwipeMobile = resolve => require(['./markdown/mobile/cell-swipe.md'], resolve)
const CellMobile = resolve => require(['./markdown/mobile/cell.md'], resolve)
const ChecklistMobile = resolve => require(['./markdown/mobile/checklist.md'], resolve)
const DatetimePickerMobile = resolve => require(['./markdown/mobile/datetime-picker.md'], resolve)
const FieldMobile = resolve => require(['./markdown/mobile/field.md'], resolve)
const HeaderMobile = resolve => require(['./markdown/mobile/header.md'], resolve)
const IconMobile = resolve => require(['./markdown/mobile/icon.md'], resolve)
const IndexListMobile = resolve => require(['./markdown/mobile/index-list.md'], resolve)
const IndicatorMobile = resolve => require(['./markdown/mobile/indicator.md'], resolve)
const InfiniteScrollMobile = resolve => require(['./markdown/mobile/infinite-scroll.md'], resolve)
const LazyloadMobile = resolve => require(['./markdown/mobile/lazyload.md'], resolve)
const LoadmoreMobile = resolve => require(['./markdown/mobile/loadmore.md'], resolve)
const MessageBoxMobile = resolve => require(['./markdown/mobile/message-box.md'], resolve)
const NavbarMobile = resolve => require(['./markdown/mobile/navbar.md'], resolve)
const PaletteButtonMobile = resolve => require(['./markdown/mobile/palette-button.md'], resolve)
const PickerMobile = resolve => require(['./markdown/mobile/picker.md'], resolve)
const PopupMobile = resolve => require(['./markdown/mobile/popup.md'], resolve)
const ProgressMobile = resolve => require(['./markdown/mobile/progress.md'], resolve)
const QuickstartMobile = resolve => require(['./markdown/mobile/quickstart.md'], resolve)
const RadioMobile = resolve => require(['./markdown/mobile/radio.md'], resolve)
const RangeMobile = resolve => require(['./markdown/mobile/range.md'], resolve)
const RepositoriesMobile = resolve => require(['./markdown/mobile/repositories.md'], resolve)
const SearchMobile = resolve => require(['./markdown/mobile/search.md'], resolve)
const SpinnerMobile = resolve => require(['./markdown/mobile/spinner.md'], resolve)
const StepsMobile = resolve => require(['./markdown/mobile/steps.md'], resolve)
const SwipeMobile = resolve => require(['./markdown/mobile/swipe.md'], resolve)
const SwitchMobile = resolve => require(['./markdown/mobile/switch.md'], resolve)
const TabContainerMobile = resolve => require(['./markdown/mobile/tab-container.md'], resolve)
const TabbarMobile = resolve => require(['./markdown/mobile/tabbar.md'], resolve)
const ToastMobile = resolve => require(['./markdown/mobile/toast.md'], resolve)
const AlertPc = resolve => require(['./markdown/pc/alert.md'], resolve)
const BadgePc = resolve => require(['./markdown/pc/badge.md'], resolve)
const BreadcrumbPc = resolve => require(['./markdown/pc/breadcrumb.md'], resolve)
const ButtonPc = resolve => require(['./markdown/pc/button.md'], resolve)
const CardPc = resolve => require(['./markdown/pc/card.md'], resolve)
const CarouselPc = resolve => require(['./markdown/pc/carousel.md'], resolve)
const CascaderPc = resolve => require(['./markdown/pc/cascader.md'], resolve)
const CheckboxPc = resolve => require(['./markdown/pc/checkbox.md'], resolve)
const CollapsePc = resolve => require(['./markdown/pc/collapse.md'], resolve)
const ColorPickerPc = resolve => require(['./markdown/pc/color-picker.md'], resolve)
const ColorPc = resolve => require(['./markdown/pc/color.md'], resolve)
const ContainerPc = resolve => require(['./markdown/pc/container.md'], resolve)
const CustomThemePc = resolve => require(['./markdown/pc/custom-theme.md'], resolve)
const DatePickerPc = resolve => require(['./markdown/pc/date-picker.md'], resolve)
const DatetimePickerPc = resolve => require(['./markdown/pc/datetime-picker.md'], resolve)
const DialogPc = resolve => require(['./markdown/pc/dialog.md'], resolve)
const DropdownPc = resolve => require(['./markdown/pc/dropdown.md'], resolve)
const FormPc = resolve => require(['./markdown/pc/form.md'], resolve)
const InputNumberPc = resolve => require(['./markdown/pc/input-number.md'], resolve)
const InputPc = resolve => require(['./markdown/pc/input.md'], resolve)
const InstallationPc = resolve => require(['./markdown/pc/installation.md'], resolve)
const LayoutPc = resolve => require(['./markdown/pc/layout.md'], resolve)
const LoadingPc = resolve => require(['./markdown/pc/loading.md'], resolve)
const MenuPc = resolve => require(['./markdown/pc/menu.md'], resolve)
const MessageBoxPc = resolve => require(['./markdown/pc/message-box.md'], resolve)
const MessagePc = resolve => require(['./markdown/pc/message.md'], resolve)
const NotificationPc = resolve => require(['./markdown/pc/notification.md'], resolve)
const PaginationPc = resolve => require(['./markdown/pc/pagination.md'], resolve)
const PopoverPc = resolve => require(['./markdown/pc/popover.md'], resolve)
const ProgressPc = resolve => require(['./markdown/pc/progress.md'], resolve)
const QuickstartPc = resolve => require(['./markdown/pc/quickstart.md'], resolve)
const RadioPc = resolve => require(['./markdown/pc/radio.md'], resolve)
const RatePc = resolve => require(['./markdown/pc/rate.md'], resolve)
const SelectPc = resolve => require(['./markdown/pc/select.md'], resolve)
const SliderPc = resolve => require(['./markdown/pc/slider.md'], resolve)
const StepsPc = resolve => require(['./markdown/pc/steps.md'], resolve)
const SwitchPc = resolve => require(['./markdown/pc/switch.md'], resolve)
const TablePc = resolve => require(['./markdown/pc/table.md'], resolve)
const TabsPc = resolve => require(['./markdown/pc/tabs.md'], resolve)
const TagPc = resolve => require(['./markdown/pc/tag.md'], resolve)
const TimePickerPc = resolve => require(['./markdown/pc/time-picker.md'], resolve)
const TooltipPc = resolve => require(['./markdown/pc/tooltip.md'], resolve)
const TransferPc = resolve => require(['./markdown/pc/transfer.md'], resolve)
const TransitionPc = resolve => require(['./markdown/pc/transition.md'], resolve)
const TreePc = resolve => require(['./markdown/pc/tree.md'], resolve)
const TypographyPc = resolve => require(['./markdown/pc/typography.md'], resolve)
const UploadPc = resolve => require(['./markdown/pc/upload.md'], resolve)

Vue.use(Router)

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    Vue.component('README-mobile', READMEMobile);
Vue.component('action-sheet-mobile', ActionSheetMobile);
Vue.component('badge-mobile', BadgeMobile);
Vue.component('button-mobile', ButtonMobile);
Vue.component('cell-swipe-mobile', CellSwipeMobile);
Vue.component('cell-mobile', CellMobile);
Vue.component('checklist-mobile', ChecklistMobile);
Vue.component('datetime-picker-mobile', DatetimePickerMobile);
Vue.component('field-mobile', FieldMobile);
Vue.component('header-mobile', HeaderMobile);
Vue.component('icon-mobile', IconMobile);
Vue.component('index-list-mobile', IndexListMobile);
Vue.component('indicator-mobile', IndicatorMobile);
Vue.component('infinite-scroll-mobile', InfiniteScrollMobile);
Vue.component('lazyload-mobile', LazyloadMobile);
Vue.component('loadmore-mobile', LoadmoreMobile);
Vue.component('message-box-mobile', MessageBoxMobile);
Vue.component('navbar-mobile', NavbarMobile);
Vue.component('palette-button-mobile', PaletteButtonMobile);
Vue.component('picker-mobile', PickerMobile);
Vue.component('popup-mobile', PopupMobile);
Vue.component('progress-mobile', ProgressMobile);
Vue.component('quickstart-mobile', QuickstartMobile);
Vue.component('radio-mobile', RadioMobile);
Vue.component('range-mobile', RangeMobile);
Vue.component('repositories-mobile', RepositoriesMobile);
Vue.component('search-mobile', SearchMobile);
Vue.component('spinner-mobile', SpinnerMobile);
Vue.component('steps-mobile', StepsMobile);
Vue.component('swipe-mobile', SwipeMobile);
Vue.component('switch-mobile', SwitchMobile);
Vue.component('tab-container-mobile', TabContainerMobile);
Vue.component('tabbar-mobile', TabbarMobile);
Vue.component('toast-mobile', ToastMobile);
Vue.component('alert-pc', AlertPc);
Vue.component('badge-pc', BadgePc);
Vue.component('breadcrumb-pc', BreadcrumbPc);
Vue.component('button-pc', ButtonPc);
Vue.component('card-pc', CardPc);
Vue.component('carousel-pc', CarouselPc);
Vue.component('cascader-pc', CascaderPc);
Vue.component('checkbox-pc', CheckboxPc);
Vue.component('collapse-pc', CollapsePc);
Vue.component('color-picker-pc', ColorPickerPc);
Vue.component('color-pc', ColorPc);
Vue.component('container-pc', ContainerPc);
Vue.component('custom-theme-pc', CustomThemePc);
Vue.component('date-picker-pc', DatePickerPc);
Vue.component('datetime-picker-pc', DatetimePickerPc);
Vue.component('dialog-pc', DialogPc);
Vue.component('dropdown-pc', DropdownPc);
Vue.component('form-pc', FormPc);
Vue.component('input-number-pc', InputNumberPc);
Vue.component('input-pc', InputPc);
Vue.component('installation-pc', InstallationPc);
Vue.component('layout-pc', LayoutPc);
Vue.component('loading-pc', LoadingPc);
Vue.component('menu-pc', MenuPc);
Vue.component('message-box-pc', MessageBoxPc);
Vue.component('message-pc', MessagePc);
Vue.component('notification-pc', NotificationPc);
Vue.component('pagination-pc', PaginationPc);
Vue.component('popover-pc', PopoverPc);
Vue.component('progress-pc', ProgressPc);
Vue.component('quickstart-pc', QuickstartPc);
Vue.component('radio-pc', RadioPc);
Vue.component('rate-pc', RatePc);
Vue.component('select-pc', SelectPc);
Vue.component('slider-pc', SliderPc);
Vue.component('steps-pc', StepsPc);
Vue.component('switch-pc', SwitchPc);
Vue.component('table-pc', TablePc);
Vue.component('tabs-pc', TabsPc);
Vue.component('tag-pc', TagPc);
Vue.component('time-picker-pc', TimePickerPc);
Vue.component('tooltip-pc', TooltipPc);
Vue.component('transfer-pc', TransferPc);
Vue.component('transition-pc', TransitionPc);
Vue.component('tree-pc', TreePc);
Vue.component('typography-pc', TypographyPc);
Vue.component('upload-pc', UploadPc);
};

const router = new Router({
      routes: [{"path":"/mobile","component":MobileView,"children":[{"name":"README","component":READMEMobile,"path":"README"},{"name":"action-sheet","component":ActionSheetMobile,"path":"action-sheet"},{"name":"badge","component":BadgeMobile,"path":"badge"},{"name":"button","component":ButtonMobile,"path":"button"},{"name":"cell-swipe","component":CellSwipeMobile,"path":"cell-swipe"},{"name":"cell","component":CellMobile,"path":"cell"},{"name":"checklist","component":ChecklistMobile,"path":"checklist"},{"name":"datetime-picker","component":DatetimePickerMobile,"path":"datetime-picker"},{"name":"field","component":FieldMobile,"path":"field"},{"name":"header","component":HeaderMobile,"path":"header"},{"name":"icon","component":IconMobile,"path":"icon"},{"name":"index-list","component":IndexListMobile,"path":"index-list"},{"name":"indicator","component":IndicatorMobile,"path":"indicator"},{"name":"infinite-scroll","component":InfiniteScrollMobile,"path":"infinite-scroll"},{"name":"lazyload","component":LazyloadMobile,"path":"lazyload"},{"name":"loadmore","component":LoadmoreMobile,"path":"loadmore"},{"name":"message-box","component":MessageBoxMobile,"path":"message-box"},{"name":"navbar","component":NavbarMobile,"path":"navbar"},{"name":"palette-button","component":PaletteButtonMobile,"path":"palette-button"},{"name":"picker","component":PickerMobile,"path":"picker"},{"name":"popup","component":PopupMobile,"path":"popup"},{"name":"progress","component":ProgressMobile,"path":"progress"},{"name":"quickstart","component":QuickstartMobile,"path":"quickstart"},{"name":"radio","component":RadioMobile,"path":"radio"},{"name":"range","component":RangeMobile,"path":"range"},{"name":"repositories","component":RepositoriesMobile,"path":"repositories"},{"name":"search","component":SearchMobile,"path":"search"},{"name":"spinner","component":SpinnerMobile,"path":"spinner"},{"name":"steps","component":StepsMobile,"path":"steps"},{"name":"swipe","component":SwipeMobile,"path":"swipe"},{"name":"switch","component":SwitchMobile,"path":"switch"},{"name":"tab-container","component":TabContainerMobile,"path":"tab-container"},{"name":"tabbar","component":TabbarMobile,"path":"tabbar"},{"name":"toast","component":ToastMobile,"path":"toast"},{"name":"CeilsMobile","component":Ceils,"path":"ceils"}]},{"path":"/pc","component":PcView,"children":[{"name":"alert","component":AlertPc,"path":"alert"},{"name":"badge","component":BadgePc,"path":"badge"},{"name":"breadcrumb","component":BreadcrumbPc,"path":"breadcrumb"},{"name":"button","component":ButtonPc,"path":"button"},{"name":"card","component":CardPc,"path":"card"},{"name":"carousel","component":CarouselPc,"path":"carousel"},{"name":"cascader","component":CascaderPc,"path":"cascader"},{"name":"checkbox","component":CheckboxPc,"path":"checkbox"},{"name":"collapse","component":CollapsePc,"path":"collapse"},{"name":"color-picker","component":ColorPickerPc,"path":"color-picker"},{"name":"color","component":ColorPc,"path":"color"},{"name":"container","component":ContainerPc,"path":"container"},{"name":"custom-theme","component":CustomThemePc,"path":"custom-theme"},{"name":"date-picker","component":DatePickerPc,"path":"date-picker"},{"name":"datetime-picker","component":DatetimePickerPc,"path":"datetime-picker"},{"name":"dialog","component":DialogPc,"path":"dialog"},{"name":"dropdown","component":DropdownPc,"path":"dropdown"},{"name":"form","component":FormPc,"path":"form"},{"name":"input-number","component":InputNumberPc,"path":"input-number"},{"name":"input","component":InputPc,"path":"input"},{"name":"installation","component":InstallationPc,"path":"installation"},{"name":"layout","component":LayoutPc,"path":"layout"},{"name":"loading","component":LoadingPc,"path":"loading"},{"name":"menu","component":MenuPc,"path":"menu"},{"name":"message-box","component":MessageBoxPc,"path":"message-box"},{"name":"message","component":MessagePc,"path":"message"},{"name":"notification","component":NotificationPc,"path":"notification"},{"name":"pagination","component":PaginationPc,"path":"pagination"},{"name":"popover","component":PopoverPc,"path":"popover"},{"name":"progress","component":ProgressPc,"path":"progress"},{"name":"quickstart","component":QuickstartPc,"path":"quickstart"},{"name":"radio","component":RadioPc,"path":"radio"},{"name":"rate","component":RatePc,"path":"rate"},{"name":"select","component":SelectPc,"path":"select"},{"name":"slider","component":SliderPc,"path":"slider"},{"name":"steps","component":StepsPc,"path":"steps"},{"name":"switch","component":SwitchPc,"path":"switch"},{"name":"table","component":TablePc,"path":"table"},{"name":"tabs","component":TabsPc,"path":"tabs"},{"name":"tag","component":TagPc,"path":"tag"},{"name":"time-picker","component":TimePickerPc,"path":"time-picker"},{"name":"tooltip","component":TooltipPc,"path":"tooltip"},{"name":"transfer","component":TransferPc,"path":"transfer"},{"name":"transition","component":TransitionPc,"path":"transition"},{"name":"tree","component":TreePc,"path":"tree"},{"name":"typography","component":TypographyPc,"path":"typography"},{"name":"upload","component":UploadPc,"path":"upload"}]}]
    })

export default {install, router}