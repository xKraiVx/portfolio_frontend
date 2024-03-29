import { IChosenPostsN } from "./global-widgets/chosen-posts-normalized.type";
import { IInitialN } from "./global-widgets/initial-normalized.type";
import { ITitleAndTextN } from "./global-widgets/title-and-text.type";

export type TWidgetN = IInitialN | ITitleAndTextN | IChosenPostsN;
