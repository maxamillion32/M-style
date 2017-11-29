const HTTP_TIMEOUT: number = 60000;

export interface Environment {
    mainApi: string;  
    timeout: number;
    debug: boolean;
    bypass: boolean;
    angularProd: boolean;
}
export const TEST: Environment = {
    mainApi: 'http://gagandeepsethi.com/salonDirectory/WebServices',   
    timeout: HTTP_TIMEOUT,
    debug: true,
    bypass: true,
    angularProd: false
};

export const ENV: Environment = TEST;