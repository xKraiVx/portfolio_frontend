import { IPageWidget } from './page-widget';

export interface ITitleAndText extends IPageWidget<'page-widgets.title-and-text'> {
    Title?: string;
    Text?: string;
}
