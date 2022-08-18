import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NzModalCustomComponent } from "./nz.modal.custom.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgZorroAntdModule, NZ_I18N, NZ_ICONS, en_US } from "ng-zorro-antd";
import { IconDefinition } from "@ant-design/icons-angular";
import * as AllIcons from "@ant-design/icons-angular/icons";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzCardModule, NzTabsModule } from "ng-zorro-antd";
import { NzCarouselModule } from "ng-zorro-antd/carousel";
import { NzModalModule } from 'ng-zorro-antd/modal';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  key => antDesignIcons[key]
);

@NgModule({
  declarations: [AppComponent, NzModalCustomComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NzButtonModule,
    NzCardModule,
    NzCarouselModule,
    NzModalModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons }
  ],
  entryComponents: [NzModalCustomComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
