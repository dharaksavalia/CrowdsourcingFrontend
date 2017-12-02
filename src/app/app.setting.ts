export const TOKEN_AUTH_USERNAME = 'AngularClientId';
export const TOKEN_AUTH_PASSWORD = 'AngularClientPassword';
export const TOKEN_NAME = 'access_token';

export class AppSettings {

    private static CONNECT_TO_SECURE_SERVER:boolean = true;
    public static REST_ENDPOINT='http://127.0.0.1:8085/DemoApp';
    public static REST_SECURE_ENDPOINT='http://127.0.0.1:8443/SecureDemoApp';

    private static _token:string;
    

    public static getEndPoint = () =>{

        if(AppSettings.CONNECT_TO_SECURE_SERVER){
            return AppSettings.REST_SECURE_ENDPOINT;
        }else{
            return AppSettings.REST_ENDPOINT;
        }

    }

    static set token(value){
        this._token = value;
    }

    static get token(){
        return this._token;
    }
 }