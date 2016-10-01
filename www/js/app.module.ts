import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
var CloudSettings = ionic.cloud-angular.CloudSettings;
var CloudModule = ionic.cloud-angular.CloudModule;

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'APP_ID'
  }
};

@NgModule({
  declarations: [],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [],
  providers: []
})
export class AppModule {}
