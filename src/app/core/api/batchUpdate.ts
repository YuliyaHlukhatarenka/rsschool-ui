import axios from 'axios';

type FileResponse = {
    file: string;
};

export function uploadFile(data: any): Promise<any> {
    return axios.post<FileResponse>(`/api/file`, data).then(response => response.data);
}
