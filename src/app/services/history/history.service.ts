import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client/http-client.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateHistory } from '../../entities/histories/create-history';
import { UpdateHistory } from '../../entities/histories/update-history';
import { History } from '../../entities/histories/history'; 
@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClientService:HttpClientService) { }


  async get():Promise<History[]>{
    const data:Observable<History[]> = await this.httpClientService.get({
      controller:"history"
    })
    return await firstValueFrom(data);
  }

  async getById(id:string):Promise<History>{
    const data:Observable<History> =await this.httpClientService.get({
      controller:"history",
      action:"gethistory"
    },id)

    return await firstValueFrom(data);
  }

  async create(createHistory:CreateHistory):Promise<CreateHistory>{

    const data:Observable<CreateHistory>= await this.httpClientService.post({
      controller:"history",
      
    }, createHistory)
    return await firstValueFrom(data);
  }

  async edit(updateHistory:UpdateHistory):Promise<UpdateHistory>{

    const data :Observable<UpdateHistory>= await this.httpClientService.put({
      controller:"history",
      action:"update"
    }, updateHistory)
    return await firstValueFrom(data)
  }

  async delete(id:string):Promise<void>{
    const data:Observable<void> = await this.httpClientService.delete({
      controller:"history",
      action:"delete"
    }, id)
  }


}
