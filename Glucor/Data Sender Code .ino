#include <Arduino.h>
#if defined(ESP32)
  #include <WiFi.h>
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "The Ch Engineer"
#define WIFI_PASSWORD "16062011m"

// Insert Firebase project API Key
#define API_KEY "AIzaSyBZJhbMyjCUSNUuRfSu7N3AiZn_dxcge0A"

// Insert RTDB URLefine the RTDB URL */
#define DATABASE_URL "https://graduation-project-e8a09-default-rtdb.firebaseio.com/" 

//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
int count = 0;
bool signupOK = false;
const int IR_Sensor_Pin = 34;  // Pin connected to the soil sensor
short IR_Reading_State = 0;
short IR_State_First_Filter = 0;
short IR_State_Second_Filter = 0;
short IR_State_Third_Filter = 0;
short IR_State_Fourth_Filter = 0;
short Glucose_Reading = 0;
short Sum = 0 ;
short Average_Reading = 0 ;
short counter = 1;

void setup(){
  pinMode(IR_Sensor_Pin, INPUT);
  analogReadResolution(12);  // Set ADC resolution to 12 bits (0-4095)
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")){
    Serial.println("ok");
    signupOK = true;
  }
  else{
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop(){

  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
    sendDataPrevMillis = millis();
    for (short i = 0 ; i <= 5 ; i++){

  IR_Reading_State = analogRead(IR_Sensor_Pin);
  IR_State_First_Filter = (8 * 10^-5) * IR_Reading_State * IR_Reading_State;
  IR_State_Third_Filter = 0.1873 * IR_Reading_State;
  IR_State_Fourth_Filter = IR_State_First_Filter + IR_State_Third_Filter + 46.131;
  IR_State_Second_Filter = IR_State_Fourth_Filter * (-1);
  Glucose_Reading = IR_State_Second_Filter / 100;
  if ((IR_Reading_State <= 940) && (IR_Reading_State >= 20) && (Glucose_Reading > 0)) {
    if (counter <= 5) {
      Sum += Glucose_Reading;

      counter++;
    }
    else {
      break ;
    }
    }
    }
    Average_Reading = Sum / counter;
    // Write an Float number on the database path test/float
    if (Firebase.RTDB.setFloat(&fbdo, "test/float", Average_Reading )){
      Serial.println("PASSED");
      Serial.println("PATH: " + fbdo.dataPath());
      Serial.println("TYPE: " + fbdo.dataType());
    }
    else {
      Serial.println("FAILED");
      Serial.println("REASON: " + fbdo.errorReason());
    }
    delay(3000);
      counter = 1 ;
      Sum = 0 ;
      Average_Reading = 0 ;
  }
}
