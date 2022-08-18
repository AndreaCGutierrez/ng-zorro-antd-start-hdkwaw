import { Component } from "@angular/core";
import { NzModalService } from "ng-zorro-antd/modal";
import { NzModalCustomComponent } from "./nz.modal.custom.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private modalService: NzModalService) {}

  showModal(): void {
    this.modalService.create({
      nzTitle: "",
      nzContent: NzModalCustomComponent,
      nzBodyStyle: {
        padding: 0
      },
      nzFooter: null
    });
  }
}
