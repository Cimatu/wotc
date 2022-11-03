import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Form from './forms.entity';
import puppeteer from 'puppeteer';

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

    async fillTheForm() {

        const browser = await puppeteer.launch({
            headless: false,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            defaultViewport: null,
            ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
            args: ['--disable-extensions-except=/path/to/my/extension',
                '--load-extension=/path/to/my/extension',
                '--user-data-dir=%userprofile%\\AppData\\Local\\Chromium\\User Data\\Profile 1'
                //'--profile-directory=Profile 1'
            ]
        })
        const page = await browser.newPage();

        await page.goto('https://eddservices.edd.ca.gov/ewotc/secure/')

        // await page.type('#username', 'wotcwiz22');
        // await page.type('#password', 'Wotcwiz22!');

        await page.type('#username', 'wotcwiz22');
        await page.type('#password', 'Wotcwiz22!');

        await page.screenshot({ path: './loginPasha.png', fullPage: true });

        const button = await page.$('.submitButton')

        await button.click();
        await page.screenshot({
            path: './loginAfterSubmit.png',
            fullPage: true,
        });

        const formPage = await browser.newPage();

        await formPage.goto('https://eddservices.edd.ca.gov/ewotc/secure/NewApplication.aspx');

        await page.type('#txtFirstName', 'Pavel');
        await page.type('#txtLastName', 'Hurin');

        await browser.close();

    }
}
