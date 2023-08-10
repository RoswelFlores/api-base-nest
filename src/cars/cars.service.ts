import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { UpdateCarDTO, CreateCarDTO } from './dtos';


@Injectable()
export class CarsService {


    private cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Auris'
        },
        {
            id: uuid(),
            brand: 'Susuki',
            model: 'Swift'
        },
        {
            id: uuid(),
            brand: 'Chevrolet',
            model: 'Aveo'
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id);
        if (!car) throw new NotFoundException(`Car with id ${id} not found`);
        return car;
    }

    createCar(createCardDTO: CreateCarDTO) {
        const car: Car = {
            id: uuid(),
            brand: createCardDTO.brand,
            model: createCardDTO.model
        }
        this.cars.push(car);
        return car;

    }

    updateCar(id: string, updateCarDTO: UpdateCarDTO) {
        let carDb = this.findOneById(id);
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDb = {
                    ...carDb,
                    ...updateCarDTO,
                    id
                }
            }
            return car;
        });
        return carDb;

    }

    deleteCar( id: string ) {
        const car = this.findOneById( id );
        this.cars = this.cars.filter( car => car.id !== id );
    }
}
