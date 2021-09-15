import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhonebookModule } from './phonebook/phonebook.module';

@Module({
	imports: [
		MongooseModule.forRoot("mongodb+srv://cossa:12345@cluster0.krz1i.mongodb.net/Words"),
		PhonebookModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
