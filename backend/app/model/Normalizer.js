/**
 * OOP styled class used to be able to normalize Social Media data
 * and avoid writing the same code several times
 */
export default class Normalizer {
    
    id=null;
    site=null;
    title=null;
    author=null;
    tag=null;
    permalink=null;
    media=[];
    creationTime = null;

    constructor(id, site, title, author, tag, permalink, creationTime){
        this.id = id;
        this.site = site;
        this.title = title;
        this.author = author;
        this.tag = tag;
        this.permalink = permalink;
        this.creationTime = creationTime;
    }

    toObject() {
        return (
            {
                id: this.id,
                site: this.site,
                title: this.title,
                author: this.author,
                tag: this.tag,
                permalink: this.permalink,
                media: this.media,
                creationTime: this.creationTime
            }
        )
    }

    addMedia(media){
        this.media.push(media);
    }
} 