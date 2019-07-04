// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { android as androidNS, AndroidActivityEventData, AndroidActivityBackPressedEventData, AndroidApplication, AndroidActivityBundleEventData } from "tns-core-modules/application";
import { AppModule } from "~/app/app.module";
import { environment } from '~/environments/environment';

declare var android: any;

// Android activity events
if (androidNS) {
  androidNS.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
    console.log('ODIN Messenger -- Event.activityCreatedEvent');
  });

  androidNS.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
  });

  androidNS.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
    console.log('ODIN Messenger -- Event.activityStartedEvent');
  });

  androidNS.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
    console.log('ODIN Messenger -- Event.saveActivityStateEvent');
  });

  androidNS.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
    console.log('ODIN Messenger -- Event.activityBackPressedEvent');
  });

  androidNS.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
    console.log('ODIN Messenger -- Event.activityPausedEvent');
  });

  androidNS.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
    console.log('ODIN Messenger -- Event.activityStoppedEvent');
  });

  androidNS.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
    console.log('ODIN Messenger -- Event.activityDestroyedEvent');
  });
}

console.log(`<Environment>

    prod?:  ${environment.production}
    reg?:   ${environment.regression}
    dev?:   ${environment.development}

</Environment>`);

platformNativeScriptDynamic().bootstrapModule(AppModule);
