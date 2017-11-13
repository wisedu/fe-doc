import Vue from 'vue'
import Router from 'vue-router'
import PcView from './pages/pc-view'
import MobileView from './pages/mobile-view'
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
      routes: [{"path":"/mobile","component":MobileView,"children":[{"name":"READMEMobile","component":READMEMobile,"path":"README"},{"name":"ActionSheetMobile","component":ActionSheetMobile,"path":"action-sheet"},{"name":"BadgeMobile","component":BadgeMobile,"path":"badge"},{"name":"ButtonMobile","component":ButtonMobile,"path":"button"},{"name":"CellSwipeMobile","component":CellSwipeMobile,"path":"cell-swipe"},{"name":"CellMobile","component":CellMobile,"path":"cell"},{"name":"ChecklistMobile","component":ChecklistMobile,"path":"checklist"},{"name":"DatetimePickerMobile","component":DatetimePickerMobile,"path":"datetime-picker"},{"name":"FieldMobile","component":FieldMobile,"path":"field"},{"name":"HeaderMobile","component":HeaderMobile,"path":"header"},{"name":"IconMobile","component":IconMobile,"path":"icon"},{"name":"IndexListMobile","component":IndexListMobile,"path":"index-list"},{"name":"IndicatorMobile","component":IndicatorMobile,"path":"indicator"},{"name":"InfiniteScrollMobile","component":InfiniteScrollMobile,"path":"infinite-scroll"},{"name":"LazyloadMobile","component":LazyloadMobile,"path":"lazyload"},{"name":"LoadmoreMobile","component":LoadmoreMobile,"path":"loadmore"},{"name":"MessageBoxMobile","component":MessageBoxMobile,"path":"message-box"},{"name":"NavbarMobile","component":NavbarMobile,"path":"navbar"},{"name":"PaletteButtonMobile","component":PaletteButtonMobile,"path":"palette-button"},{"name":"PickerMobile","component":PickerMobile,"path":"picker"},{"name":"PopupMobile","component":PopupMobile,"path":"popup"},{"name":"ProgressMobile","component":ProgressMobile,"path":"progress"},{"name":"QuickstartMobile","component":QuickstartMobile,"path":"quickstart"},{"name":"RadioMobile","component":RadioMobile,"path":"radio"},{"name":"RangeMobile","component":RangeMobile,"path":"range"},{"name":"RepositoriesMobile","component":RepositoriesMobile,"path":"repositories"},{"name":"SearchMobile","component":SearchMobile,"path":"search"},{"name":"SpinnerMobile","component":SpinnerMobile,"path":"spinner"},{"name":"StepsMobile","component":StepsMobile,"path":"steps"},{"name":"SwipeMobile","component":SwipeMobile,"path":"swipe"},{"name":"SwitchMobile","component":SwitchMobile,"path":"switch"},{"name":"TabContainerMobile","component":TabContainerMobile,"path":"tab-container"},{"name":"TabbarMobile","component":TabbarMobile,"path":"tabbar"},{"name":"ToastMobile","component":ToastMobile,"path":"toast"}]},{"path":"/pc","component":PcView,"children":[{"name":"AlertPc","component":AlertPc,"path":"alert"},{"name":"BadgePc","component":BadgePc,"path":"badge"},{"name":"BreadcrumbPc","component":BreadcrumbPc,"path":"breadcrumb"},{"name":"ButtonPc","component":ButtonPc,"path":"button"},{"name":"CardPc","component":CardPc,"path":"card"},{"name":"CarouselPc","component":CarouselPc,"path":"carousel"},{"name":"CascaderPc","component":CascaderPc,"path":"cascader"},{"name":"CheckboxPc","component":CheckboxPc,"path":"checkbox"},{"name":"CollapsePc","component":CollapsePc,"path":"collapse"},{"name":"ColorPickerPc","component":ColorPickerPc,"path":"color-picker"},{"name":"ColorPc","component":ColorPc,"path":"color"},{"name":"ContainerPc","component":ContainerPc,"path":"container"},{"name":"CustomThemePc","component":CustomThemePc,"path":"custom-theme"},{"name":"DatePickerPc","component":DatePickerPc,"path":"date-picker"},{"name":"DatetimePickerPc","component":DatetimePickerPc,"path":"datetime-picker"},{"name":"DialogPc","component":DialogPc,"path":"dialog"},{"name":"DropdownPc","component":DropdownPc,"path":"dropdown"},{"name":"FormPc","component":FormPc,"path":"form"},{"name":"InputNumberPc","component":InputNumberPc,"path":"input-number"},{"name":"InputPc","component":InputPc,"path":"input"},{"name":"InstallationPc","component":InstallationPc,"path":"installation"},{"name":"LayoutPc","component":LayoutPc,"path":"layout"},{"name":"LoadingPc","component":LoadingPc,"path":"loading"},{"name":"MenuPc","component":MenuPc,"path":"menu"},{"name":"MessageBoxPc","component":MessageBoxPc,"path":"message-box"},{"name":"MessagePc","component":MessagePc,"path":"message"},{"name":"NotificationPc","component":NotificationPc,"path":"notification"},{"name":"PaginationPc","component":PaginationPc,"path":"pagination"},{"name":"PopoverPc","component":PopoverPc,"path":"popover"},{"name":"ProgressPc","component":ProgressPc,"path":"progress"},{"name":"QuickstartPc","component":QuickstartPc,"path":"quickstart"},{"name":"RadioPc","component":RadioPc,"path":"radio"},{"name":"RatePc","component":RatePc,"path":"rate"},{"name":"SelectPc","component":SelectPc,"path":"select"},{"name":"SliderPc","component":SliderPc,"path":"slider"},{"name":"StepsPc","component":StepsPc,"path":"steps"},{"name":"SwitchPc","component":SwitchPc,"path":"switch"},{"name":"TablePc","component":TablePc,"path":"table"},{"name":"TabsPc","component":TabsPc,"path":"tabs"},{"name":"TagPc","component":TagPc,"path":"tag"},{"name":"TimePickerPc","component":TimePickerPc,"path":"time-picker"},{"name":"TooltipPc","component":TooltipPc,"path":"tooltip"},{"name":"TransferPc","component":TransferPc,"path":"transfer"},{"name":"TransitionPc","component":TransitionPc,"path":"transition"},{"name":"TreePc","component":TreePc,"path":"tree"},{"name":"TypographyPc","component":TypographyPc,"path":"typography"},{"name":"UploadPc","component":UploadPc,"path":"upload"}]}]
    })

export default {install, router}