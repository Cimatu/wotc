import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Form from './forms.entity';
import puppeteer from 'puppeteer';
import { CreateFormDto } from './dto/create-form.dto';

@Injectable()
export class FormsService {
    constructor(
        @InjectRepository(Form)
        private readonly formRepository: Repository<Form>,
    ) { }

    // async createAdmin(dto: SignDto) {
    //     const admin = await this.userRepository.create(dto);
    //     admin.role = Role.ADMIN;
    //     return await this.userRepository.save(admin);
    // }

    async fillTheForm(dto: CreateFormDto) {
        const browser = await puppeteer.launch({
            headless: false,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            defaultViewport: null,
            ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
            // args: ['--disable-extensions-except=/path/to/my/extension',
            //     '--load-extension=/path/to/my/extension',
            //     '--user-data-dir=%userprofile%\\AppData\\Local\\Chromium\\User Data\\Profile 1'
            //     //'--profile-directory=ProfileF 1'
            // ]
        })
        const page = await browser.newPage();

        await page.goto('http://localhost:3000/')


        // await page.type('#username', 'wotcwiz22');
        // await page.type('#password', 'Wotcwiz22!');

        // await page.screenshot({ path: './loginPasha.png', fullPage: true });

        // const button = await page.$('.submitButton')

        // await button.click();
        // await page.screenshot({
        //     path: './loginAfterSubmit.png',
        //     fullPage: true,
        // });

        // const formPage = await browser.newPage();

        // await formPage.goto('http://localhost:3000/');

        const { txtFirstName, txtLastName, txtSSN, txtStreet, txtCity, txtState, txtZip } = dto;
        await page.type(`#${txtFirstName}`, txtFirstName);
        await page.type(`#${txtLastName}`, txtLastName);
        await page.type(`#${txtSSN}`, txtSSN);
        await page.type(`#${txtStreet}`, txtStreet);
        await page.type(`#${txtCity}`, txtCity);
        await page.type(`#${txtState}`, txtState);
        await page.type(`#${txtZip}`, txtZip);

        const { txtFEIN, txtErName, txtErPhone, txtErStreet, txtErCity, txtErState, txtErZip } = dto;
        await page.type(`#${txtFEIN}`, txtFEIN);
        await page.type(`#${txtErName}`, txtErName);
        await page.type(`#${txtErPhone}`, txtErPhone);
        await page.type(`#${txtErStreet}`, txtErStreet);
        await page.type(`#${txtErCity}`, txtErCity);
        await page.type(`#${txtErState}`, txtErState);
        await page.type(`#${txtErZip}`, txtErZip);

        const { txtContactName, txtContactPhone, txtContactStreet, txtContactCity, txtContactState,
            txtContactZip, ddlGroupNumber, txtInfoDate, txtOfferDate, txtHireDate, txtStartDate } = dto;
        await page.type(`#${txtContactName}`, txtContactName);
        await page.type(`#${txtContactPhone}`, txtContactPhone);
        await page.type(`#${txtContactStreet}`, txtContactStreet);
        await page.type(`#${txtContactCity}`, txtContactCity);
        await page.type(`#${txtContactState}`, txtContactState);
        await page.type(`#${txtContactZip}`, txtContactZip);
        await page.select(`#${ddlGroupNumber}`, ddlGroupNumber);
        await page.type(`#${txtInfoDate}`, txtInfoDate);
        await page.type(`#${txtOfferDate}`, txtOfferDate);
        await page.type(`#${txtHireDate}`, txtHireDate);
        await page.type(`#${txtStartDate}`, txtStartDate);

        const { chkItem1, chkItem2, chkItem3, chkItem4, chkItem5, chkItem6, chkItem7 } = dto;

        let checkbox;
        if (chkItem1) {
            checkbox = await page.$(`#${chkItem1}`);
            await checkbox.click();
        }
        if (chkItem2) {
            checkbox = await page.$(`#${chkItem2}`);
            await checkbox.click();
        }
        if (chkItem3) {
            checkbox = await page.$(`#${chkItem3}`);
            await checkbox.click();
        }
        if (chkItem4) {
            checkbox = await page.$(`#${chkItem4}`);
            await checkbox.click();
        }
        if (chkItem5) {
            checkbox = await page.$(`#${chkItem5}`);
            await checkbox.click();
        }
        if (chkItem6) {
            checkbox = await page.$(`#${chkItem6}`);
            await checkbox.click();
        }
        if (chkItem7) {
            checkbox = await page.$(`#${chkItem7}`);
            await checkbox.click();
        }

        checkbox = await page.$(`#StartNextButton`);
        await checkbox.click();

        

        await browser.close();

    }
}
