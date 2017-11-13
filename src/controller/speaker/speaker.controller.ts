import {Controller, Param, Body, Get, Post, Put, Delete} from "routing-controllers";

@Controller()
export class SpeakerController {

    @Get("/speakers")
    getAll() {
       return "This action returns all speakers";
    }

    @Get("/speaker/:id")
    getOne(@Param("id") id: number) {
       return "This action returns speaker #" + id;
    }

    @Post("/speakers")
    post(@Body() speaker: any) {
       return "Saving speaker...";
    }

    @Put("/speakers/:id")
    put(@Param("id") id: number, @Body() speaker: any) {
       return "Updating a speaker...";
    }

    @Delete("/speakers/:id")
    remove(@Param("id") id: number) {
       return "Removing speaker...";
    }

}