import { Request, Response } from 'express';
import { ReflectiveInjector, Injector } from 'injection-js';
import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { Speakers, Speaker } from '../models/speaker';
import { SpeakerRepository } from '../data/speaker-repository';

const injector = ReflectiveInjector.resolveAndCreate([
    SpeakerRepository
  ]);
@JsonController()
export class SpeakerController {
    private repository: SpeakerRepository;

    constructor() {
        this.repository = injector.get(SpeakerRepository);
    }

    @Get('/speakers')
    getAll() {
       return this.repository.getAll();
    }
    
    @Get('/speakers/:id')
    getOne(@Req() request: Request, 
           @Res() response: Response, 
           @Param("id") id: string) {
       return response.send(this.repository.get(id));
    }

    @Post('/speakers')
    post(@Req() request: Request, 
         @Res() response: Response, 
         @Body() speaker: Speaker) {
        return response.send(this.repository.save(speaker));
    }

    @Put('/speakers/:id')
    put(@Req() request: Request, 
        @Res() response: Response,
        @Param('id') id: string, 
        @Body() speaker: Speaker) {
        return response.send(this.repository.update(id, speaker));
    }

    @Delete('/speakers/:id')
    remove(@Param('id') id: string) {
       return 'Removing speaker...';
    }

}