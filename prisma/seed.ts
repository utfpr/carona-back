import { PrismaClient } from '@prisma/client'
import { AppError } from '../src/errors/AppError'
import { hash } from 'bcrypt'

const prisma = new PrismaClient({
	log: [
		{
			emit: 'event',
			level: 'query',
		},
		{
			emit: 'stdout', 
			level: 'error',
		},
		{
			emit: 'stdout',
			level: 'info',
		},
		{
			emit: 'stdout',
			level: 'warn',
		},
	],
})

async function createUsers(){
    await prisma.user.create({
        data: {
            name: 'Usuário 1',
            email: 'usuario1@gmail.com',
            ra: 'a0000001',
            password: await hash('Abcde1234.', 8),
            active: true,
            haveCar: true
        }
    })

    await prisma.user.create({
        data: {
            name: 'Usuário 1',
            email: 'usuario2@gmail.com',
            ra: 'a0000002',
            password: await hash('Abcde1234.', 8),
            active: true,
            haveCar: true
        }
    })

    await prisma.user.create({
        data: {
            name: 'Usuário 3',
            email: 'usuario3@gmail.com',
            ra: 'a0000003',
            password: await hash('Abcde1234.', 8),
            active: true,
            haveCar: false
        }
    })

    await prisma.user.create({
        data: {
            name: 'Usuário 4',
            email: 'usuario4@gmail.com',
            ra: 'a0000004',
            password: await hash('Abcde1234.', 8),
            active: true,
            haveCar: false
        }
    })

    await prisma.user.create({
        data: {
            name: 'Usuário 5',
            email: 'usuario5@gmail.com',
            ra: 'a0000005',
            password: await hash('Abcde1234.', 8),
            active: true,
            haveCar: false
        }
    })

    await prisma.user.create({
        data: {
            name: 'Usuário 6',
            email: 'usuario6@gmail.com',
            ra: 'a0000006',
            password: await hash('Abcde1234.', 8),
            active: true,
            haveCar: false
        }
    })
}

async function createCars(){
    const user1 = await prisma.user.findUnique({
        where: {email: 'usuario1@gmail.com'}
    })

    const user2 = await prisma.user.findUnique({
        where: {email: 'usuario2@gmail.com'}
    })

    await prisma.car.create({
        data: {
            plate: 'aaa1111',
            description: 'carro do usuário 1',
            userId: user1?.id || -1,
            active: true,
            mainCar: true
        }
    })

    await prisma.car.create({
        data: {
            plate: 'aaa2222',
            description: 'carro do usuário 1',
            userId: user1?.id || -1,
            active: true,
            mainCar: false
        }
    })

    await prisma.car.create({
        data: {
            plate: 'aaa3333',
            description: 'carro do usuário 1',
            userId: user1?.id || -1,
            active: true,
            mainCar: false
        }
    })

    await prisma.car.create({
        data: {
            plate: 'bbb1111',
            description: 'carro do usuário 2',
            userId: user2?.id || -1,
            active: true,
            mainCar: true
        }
    })

    await prisma.car.create({
        data: {
            plate: 'bbb2222',
            description: 'carro do usuário 2',
            userId: user2?.id || -1,
            active: true,
            mainCar: false
        }
    })
}

async function createRaces(){
    const user1 = await prisma.user.findUnique({
        where: {email: 'usuario1@gmail.com'}
    })

    const user2 = await prisma.user.findUnique({
        where: {email: 'usuario2@gmail.com'}
    })

    if(!user1 || !user2) throw new AppError('Error')
        const user1car = await prisma.car.findFirst({
        where: {userId: user1.id}
    })

        const user2car = await prisma.car.findFirst({
            where: {userId: user2.id}
        })
    
        if(!user1car || !user2car) throw new AppError('Car error')
     
    await prisma.race.create({
        data: {
            originPoint: 'Estacionamento Superior UTFPR',
            endPoint: "Terminal Urbano Central",
            timeStart:"2024-10-21T18:57:29.499Z",
            seats: 1,
            userId: user1.id,
            carId: user1car.id,
            active: true,
            drivername: user1.name
        }
    })

    await prisma.chat.create({
        data: {
            raceId: 1,
            name: "UTF ao terminal"
        }
    })

    await prisma.race.create({
        data: {
            originPoint: 'Estacionamento Superior UTFPR',
            endPoint: "Terminal Urbano Central",
            timeStart:"2024-05-21T18:57:29.499Z",
            seats: 1,
            userId: user1.id,
            carId: user1car.id,
            active: true,
            drivername: user1.name
        }
    })

    await prisma.chat.create({
        data: {
            raceId: 2,
            name: "UTF ao terminal"
        }
    })

    await prisma.race.create({
        data: {
            originPoint: 'Estacionamento Inferior UTFPR',
            endPoint: "Fiorella",
            timeStart:"2024-09-21T17:57:29.499Z",
            seats: 0,
            userId: user2.id,
            carId: user2car.id,
            active: true,
            drivername:user2.name
        }
    })

    await prisma.chat.create({
        data: {
            raceId: 3,
            name: "UTF à Fiorella"
        }
    })

    await prisma.race.create({
        data: {
            originPoint: 'Estacionamento Inferior UTFPR',
            endPoint: "Fiorella",
            timeStart:"2024-09-21T17:57:29.499Z",
            seats: 0,
            userId: user2.id,
            carId: user2car.id,
            active: true,
            drivername: user2.name
        }
    })

    await prisma.chat.create({
        data: {
            raceId: 4,
            name: "UTF à Fiorella"
        }
    })

    await prisma.race.create({
        data: {
            originPoint: 'Estacionamento Superior UTFPR',
            endPoint: "Terminal Urbano Central",
            timeStart:"2024-11-21T18:57:29.499Z",
            seats: 1,
            userId: user1.id,
            carId: user1car.id,
            active: false,
            drivername: user1.name
        }
    })

    await prisma.chat.create({
        data: {
            raceId: 5,
            name: "UTF ao Terminal"
        }
    })
}

async function createPassengers(){
    const user3 = await prisma.user.findUnique({
        where: {email: 'usuario3@gmail.com'}
    })

    const user4 = await prisma.user.findUnique({
        where: {email: 'usuario4@gmail.com'}
    })

    const user5 = await prisma.user.findUnique({
        where: {email: 'usuario5@gmail.com'}
    })

    const user6 = await prisma.user.findUnique({
        where: {email: 'usuario6@gmail.com'}
    })

    const races = await prisma.race.findMany()

    if(!user3 || !user4 || !user5 || !user6 || !races[0] || !races[1]) throw new AppError('Users Error')

    await prisma.passengers.create({
        data: {
            name: 'usuário 3',
            userId: user3.id,
            raceId: races[0].id,
            active: true
        }
    })

    await prisma.passengers.create({
        data: {
            name: 'usuário 3',
            userId: user3.id,
            raceId: races[1].id,
            active: true
        }
    })

    await prisma.passengers.create({
        data: {
            name: 'usuário 4',
            userId: user4.id,
            raceId: races[0].id,
            active: true
        }
    })

    await prisma.passengers.create({
        data: {
            name: 'usuário 5',
            userId: user5.id,
            raceId: races[1].id,
            active: true
        }
    })

    await prisma.passengers.create({
        data: {
            name: 'usuário 6',
            userId: user6.id,
            raceId: races[1].id,
            active: true
        }
    })

    await prisma.passengers.create({
        data: {
            name: 'usuário 3',
            userId: user3.id,
            raceId: races[1].id,
            active: true
        }
    })

    await prisma.passengers.create({
        data: {
            name: 'usuário 1',
            userId: 1,
            raceId: 3,
            active: true
        }
    })


}

async function main() {
	await createUsers()
    await createCars()
    await createRaces()
    await createPassengers()
}

main()
	.catch(e => console.error(e))
	.finally(async () => {
		await prisma.$disconnect()
	})