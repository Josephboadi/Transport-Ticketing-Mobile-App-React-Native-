package com.travelgh;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);

        // VideoView videoView = findViewById(R.id.video_view);
        // String videoPath = "android.resource://" + getPackageName() + "/" + R.raw.splash;
        // Uri uri = Uri.parse(videoPath);
        // videoView.setVideoURI(uri);

        // MediaController mediaController = new MediaController(this);
        // videoView.setMediaController(mediaController);
        // mediaController.setAnchorView(videoView);
    }
  @Override
  protected String getMainComponentName() {
    return "Travelgh";
  }
}
