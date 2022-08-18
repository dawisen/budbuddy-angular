import { CommonModule } from "@angular/common";
import { PlantListComponent } from "./plant-list.component";
import { HttpClientModule } from "@angular/common/http";
// import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MaterialModule } from "src/app/material.module";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
    declarations: [PlantListComponent],
    exports: [PlantListComponent],
    imports: [CommonModule, HttpClientModule, MatIconModule, MaterialModule, MatGridListModule]
})

export class PlantListModule {}