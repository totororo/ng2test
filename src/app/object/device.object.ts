export interface Device {
    uid: string;
    device_id: string;
    display_name?: string;
    device_description?: string;
    device_token?: string;
    register_date?: number;
    public_yn: boolean;
}