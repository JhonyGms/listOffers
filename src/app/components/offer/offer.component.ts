import { Component, OnInit } from '@angular/core';
import { DataJsonService } from "../../services/data-json.service"

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  data = []

  item = {
    id: '',
    id_oferta: '',
    name: ''

  }
  constructor(
    public DataJsonServices: DataJsonService
  ) { }

  async ngOnInit() {
    await this.DataJsonServices.listOfferts()
      .subscribe(res => {
        this.data = res
      })
  }

  changeWebsite(s) {
    if (this.item.id == "") {
      this.item.id_oferta = ''
      this.item.name = ''
    } else {
      this.item.id_oferta = this.data[this.item.id].versions[0].id
      this.item.name = this.data[this.item.id].versions[0].name
    }
  }
}
