import { AppItems, AppItemCategories } from './../items';
export class Home {
    private items = AppItems;
    private categories = AppItemCategories;
    private currentCategory = '';
    private currentTag = '';

    private searchTerm = '';

    setCategory(slug: string) {
        this.currentCategory = slug;
    }

    setTag(tag: string) {
        if (tag === this.currentTag) {
            this.currentTag = '';
        } else {
            this.currentTag = tag;
        }
    }
}