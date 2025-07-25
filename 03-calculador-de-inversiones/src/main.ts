
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

/* De esta forma iniciamos una app Angular que usa módulos en lugar de componentes independientes  */