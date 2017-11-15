import { Request, Response } from 'express';
import { ReflectiveInjector, Injector } from 'injection-js';
import { JsonController, Param, Body, Get, Post, Put, Delete, Req, Res } from 'routing-controllers';
import { Speakers, Speaker } from '../models/speaker';
import { SpeakerRepository } from '../data/speaker/speaker.repository';
import { SlideRepository } from '../data/slide/slide.repository';
import { DataSource } from '../data/data-source';

const injector = ReflectiveInjector.resolveAndCreate([
    DataSource,
    SpeakerRepository,
    SlideRepository
]);
@JsonController()
export class SpeakerController {
    private dataSource: DataSource = <DataSource>injector.get(DataSource);
    private speakerRepository: SpeakerRepository;
    private slideRepository: SlideRepository;

    constructor() {
        this.speakerRepository = this.dataSource.getSpeakerRepository();
        this.slideRepository = this.dataSource.getSlideRepository();
    }

    @Get('/speakers')
    getAll() {
       return this.speakerRepository.getAll();
    }
    
    @Get('/speakers/:id')
    getOne(@Req() request: Request, 
           @Res() response: Response, 
           @Param("id") id: string) {
       return response.send(this.speakerRepository.get(id));
    }

    @Post('/speakers')
    post(@Req() request: Request, 
         @Res() response: Response, 
         @Body() speaker: Speaker) {
        return response.send(this.speakerRepository.save(speaker));
    }

    @Put('/speakers/:id')
    put(@Req() request: Request, 
        @Res() response: Response,
        @Param('id') id: string, 
        @Body() speaker: Speaker) {
        return response.send(this.speakerRepository.update(id, speaker));
    }

    @Delete('/speakers/:id')
    remove(@Param('id') id: string) {
       return 'Removing speaker...';
    }

    @Get('/speakers/:id/slides')
    getSlides(@Req() request: Request, 
              @Res() response: Response, 
              @Param("id") id: string) {
       return response.send(this.slideRepository.getAll(id));
    }

    @Get('/speakers/:id/slides/:idSlide')
    getSlide(@Req() request: Request, 
              @Res() response: Response, 
              @Param("id") id: string,
              @Param("idSlide") idSlide: string,) {
       return response.send(this.slideRepository.get(id, idSlide));
    }
}