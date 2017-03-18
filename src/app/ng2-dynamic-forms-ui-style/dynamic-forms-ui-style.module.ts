import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormsCoreModule } from "@ng2-dynamic-forms/core";
import { DynamicFormUIStyleComponent } from "./dynamic-form-ui-style.component";

@NgModule({

    imports: [
        CommonModule,
        ReactiveFormsModule,
        DynamicFormsCoreModule
    ],
    declarations: [
        DynamicFormUIStyleComponent
    ],
    exports: [
        DynamicFormsCoreModule,
        DynamicFormUIStyleComponent
    ]
})

export class DynamicFormsUIStyleModule {
}
