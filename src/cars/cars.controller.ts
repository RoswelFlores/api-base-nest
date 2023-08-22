import { Controller, Get, Param, Post, Body, Patch, Delete, ParseUUIDPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDTO } from './dtos';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ) { }
    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
        return {
            'auto': this.carsService.findOneById(id)
        }
    }

    @Post()
    createCar(@Body() createCardDTO: CreateCarDTO) {
        return this.carsService.createCar(createCardDTO);
    }

    @Patch(':id')
    updateCar(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
        @Body() updateCarDTO: UpdateCarDTO) {
        return this.carsService.updateCar(id, updateCarDTO);
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string ) {
      return this.carsService.deleteCar( id )
    }
  

}
