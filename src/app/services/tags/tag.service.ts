import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { CreateTags } from '../../entities/tags/create-tags';
import { HttpClientService } from '../http-client/http-client.service';
import { Tags } from '../../entities/tags/tags';
import { EditTags } from '../../entities/tags/edit-tags';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  constructor(public httpClientService: HttpClientService ) { }

  async getAll(): Promise<Tags[]> {
    const data: Observable<Tags[]> = this.httpClientService.get({
      controller: "tags",
    });
    return await firstValueFrom(data);
  }

  async getById(id: string): Promise<Tags> {
    const data: Observable<Tags> = this.httpClientService.get({
      controller: "tags",
      action:"tagsIndex",
      

    }, id);
    return await firstValueFrom(data);
  }

  async create(createTags: CreateTags): Promise<CreateTags> {
 
    const data: Observable<CreateTags> = this.httpClientService.post({
      controller: "tags",
      
    }, createTags);
    return await firstValueFrom(data);
  }
  async edit(editTags:EditTags):Promise<EditTags>{
    const data:Observable<EditTags>= this.httpClientService.put({
      controller:"tags",
      action:"update"
    } , editTags)

    return await firstValueFrom(data);
  }
  async delete(id: string): Promise<any> {
    const _data: Observable<any> = this.httpClientService.delete({
      controller: "tags",
      action: "delete"
    }, id);
    return await firstValueFrom(_data);
  }
  async search(search:string):Promise<any[]>{
   debugger
    const data:Observable<any[]>= this.httpClientService.get({
     controller:"tags",
     action:"filter",
     queryString:`search=${search}`
    })
    return firstValueFrom(data);
  }
}
