/*
    IOT -
        - device
            - uid
                - device_id
                - display_name
                - device_description
                - device_type
                - register_date
                - public_yn
                - sendor
                    - sensor_id
                    - sensor_name
                    - sendor_type
                    - sensor_trigger
                    - sensor_controller_command



        - sensor_data // 端末から受信データー
                - device_id
                    - sensor_id
                        - $key
                            - message  {  }

        - command_data // 端末へ送信データー
                - device_id
                    - sensor_id
                        - command

        - support_device_list
            - $key
                - name

        - support_sensor_list
            - $key
                - name


*/

/*
Arduino

Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
void loop() {
    Firebase.push("/iot/sensor_data/", "{message:""}")
    delay(5000);
}

*/

/*
 Raspberry pi

var gpio = require('pi-gpio');
var Firebase = require('firebase');

var pin = 12;
var host = "<firebase APP URL>";
var myFirebaseRef = new Firebase(host);

gpio.open(pin, "input", function(err) {
    intervalId = setInterval( function(){
        gpio.read(pin, function(err, v) {
            if ( v == 1 ) {
                myFirebaseRef.set({'title': 'button off'});
                console.log('button off');
            } else {
                myFirebaseRef.set({'title': 'button on'});
                console.log('button on');
            };
        });
    }, 100);
});
*/


export class Device {
    uid: string;
    device_id: string;
    display_name?: string;
    device_description?: string;
    device_type: DeviceType;
    register_date?: number;
    public_yn: boolean;
    sensors: Sensor[];

    public static clone(device: Device): Device {
            delete device['$key'];
    delete device['$exists'];
        return device;
    }
}

export interface Sensor {
    sensor_id: string;
    sensor_name: string;
    sensor_type: SensorType; // send, receive
    command_type: CommandType; // trigger ,control
    trigger_name: TriggerType; // sendmail ,push
    trigger_conditional: ConditionalType; // > = <
    trigger_conditional_value: number;
    control_command: string;
}

export const enum DeviceType {
    RaspbarryPi = 1,
    Arduino = 2,
    Other = -1
}

export const enum SensorType {
    Send = 1,
    Receive = 2,
}

export const enum CommandType {
    Trigger = 1,
    Control = 2
}

export const enum TriggerType {
    SendMail = 1,
    PushNotification = 2,
}

export const enum ConditionalType {
    Ooki = 1,
    Equal = 2,
    Tisai = 3
}
