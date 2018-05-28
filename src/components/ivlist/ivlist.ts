import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BifrostProvider } from '../../providers/bifrost/bifrost';
import { HandlerProvider } from '../../providers/handler/handler';

/**
 * Generated class for the IvlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ivlist',
  templateUrl: 'ivlist.html'
})
export class IvlistComponent implements OnInit {
  @Input() type: string;
  @Input() filter: string;
  @Input() map;
  @Output() clickItem: EventEmitter<any> = new EventEmitter();
  /*
  map = {
    img:  DbColumn
    title:  DbColumn
    desc:  DbColumn
  }
   */
  private listData: Array<any> = [];

  constructor(
    public handler: HandlerProvider,
    public bifrost: BifrostProvider) { }

  ngOnInit() {
    this.load();
  }

  mapResponse(response: Array<any>): Array<any> {

    if (!response.length) return [];

    return response.map(mapItem => ({
      img: mapItem[this.map.img],
      title: mapItem[this.map.title],
      desc: mapItem[this.map.desc],
      subtitle: `${this.map.subtitle.pretext} ➡️ ${mapItem[this.map.subtitle.text]}`,
      data: mapItem
    }));
  }

  load(event?) {
    this.bifrost
      .search(this.type, this.filter)
      .then(response => this.listData = this.mapResponse(response))
      .catch(error => this.handler.there(error))
  }

  linkEvent(item, event) {
    this.clickItem.emit({ data: item.data, event });
  }

}
