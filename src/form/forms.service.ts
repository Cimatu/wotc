import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Form from './forms.entity';
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import puppeteer from 'puppeteer-extra';

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

    async fillTheForm() {
        const browser = await puppeteer
            .use(StealthPlugin())
            .launch({   
                headless: false,
                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
                // defaultViewport: null,
                ignoreDefaultArgs: ["--disable-extensions", "--enable-automation"],
                // args: ['--disable-extensions-except=/path/to/my/extension',
                //     '--load-extension=/path/to/my/extension',
                //     '--user-data-dir=%userprofile%\\AppData\\Local\\Chromium\\User Data\\Profile 1'
                //     //'--profile-directory=ProfileF 1'
                // ]
            })
        const page = await browser.newPage();

        await page.goto('https://eddservices.edd.ca.gov/ewotc/secure/')

        await page.type('#username', 'wotcwiz22');
        await page.type('#txtPassword', 'Wotcwiz22!');

        await page.screenshot({ path: './loginPasha.png', fullPage: true });

        // const button = await page.$('.submitButton')
        // await button.click();
        await page.keyboard.press('Enter');

        // const form = await browser.newPage();

        // await page.goto('https://eddservices.edd.ca.gov/ewotc/secure/NewApplication.aspx');
        // await page.type(`#txtFirstName`, 'txtFirstName');
        // await page.type(`#txtLastName`, 'txtLastName');
        // await page.type(`#txtSSN`, 'txtSSN');
        // await page.type(`#txtStreet`, 'txtStreet');
        // await page.type(`#txtCity`, 'txtCity');
        // await page.type(`#txtState`, 'txtState');
        // await page.type(`#txtZip`, 'txtZip');

        await page.screenshot({
            path: './loginAfterSubmit.png',
            fullPage: true,
        });

        // const { txtFirstName, txtLastName, txtSSN, txtStreet, txtCity, txtState, txtZip } = dto;
        // await page.type(`#txtFirstName`, txtFirstName);
        // await page.type(`#txtLastName`, txtLastName);
        // await page.type(`#txtSSN`, txtSSN);
        // await page.type(`#txtStreet`, txtStreet);
        // await page.type(`#txtCity`, txtCity);
        // await page.type(`#txtState`, txtState);
        // await page.type(`#txtZip`, txtZip);

        // const { txtFEIN, txtErName, txtErPhone, txtErStreet, txtErCity, txtErState, txtErZip } = dto;
        // await page.type(`#txtFEIN`, txtFEIN);
        // await page.type(`#txtErName`, txtErName);
        // await page.type(`#txtErPhone`, txtErPhone);
        // await page.type(`#txtErStreet`, txtErStreet);
        // await page.type(`#txtErCity`, txtErCity);
        // await page.type(`#txtErState`, txtErState);
        // await page.type(`#txtErZip`, txtErZip);

        // const { txtContactName, txtContactPhone, txtContactStreet, txtContactCity, txtContactState,
        //     txtContactZip, ddlGroupNumber, txtInfoDate, txtOfferDate, txtHireDate, txtStartDate } = dto;
        // await page.type(`#txtContactName`, txtContactName);
        // await page.type(`#txtContactPhone`, txtContactPhone);
        // await page.type(`#txtContactStreet`, txtContactStreet);
        // await page.type(`#txtContactCity`, txtContactCity);
        // await page.type(`#txtContactState`, txtContactState);
        // await page.type(`#txtContactZip`, txtContactZip);
        // await page.select(`#ddlGroupNumber`, ddlGroupNumber);
        // await page.type(`#txtInfoDate`, txtInfoDate);
        // await page.type(`#txtOfferDate`, txtOfferDate);
        // await page.type(`#txtHireDate`, txtHireDate);
        // await page.type(`#txtStartDate`, txtStartDate);

        // const { chkItem1, chkItem2, chkItem3, chkItem4, chkItem5, chkItem6, chkItem7 } = dto;

        // let checkbox;
        // if (chkItem1) {
        //     checkbox = await page.$(`#chkItem1`);
        //     await checkbox.click();
        // }
        // if (chkItem2) {
        //     checkbox = await page.$(`#chkItem2`);
        //     await checkbox.click();
        // }
        // if (chkItem3) {
        //     checkbox = await page.$(`#chkItem3`);
        //     await checkbox.click();
        // }
        // if (chkItem4) {
        //     checkbox = await page.$(`#chkItem4`);
        //     await checkbox.click();
        // }
        // if (chkItem5) {
        //     checkbox = await page.$(`#chkItem5`);
        //     await checkbox.click();
        // }
        // if (chkItem6) {
        //     checkbox = await page.$(`#chkItem6`);
        //     await checkbox.click();
        // }
        // if (chkItem7) {
        //     checkbox = await page.$(`#chkItem7`);
        //     await checkbox.click();
        // }

        // checkbox = await page.$(`#StartNextButton`);
        // await checkbox.click();


        // const { optPreviousEmployer, txtLastEmploymentDate, txtStartWage, ddlOccupation, optVeteran } = dto;

        // let radio;
        // if (optPreviousEmployer) {
        //     radio = await page.$(`#optPreviousEmployer_0`);
        //     await radio.click();
        //     await page.type(`#txtLastEmploymentDate`, txtLastEmploymentDate);
        // } else {
        //     radio = await page.$(`#optPreviousEmployer_1`);
        //     await radio.click();
        // }

        // await page.type(`#txtStartWage`, txtStartWage);
        // await page.select(`#ddlOccupation`, ddlOccupation);

        // if (optVeteran) {
        //     radio = await page.$(`#optVeteran_0`);
        //     await radio.click();
        //     const { optVeteranReceivedSnap, optVeteranDisability, optVeteranDischarged, optVeteranUnemployed } = dto;
        //     if (optVeteranReceivedSnap) {
        //         const { txtVeteranSnapPrimaryRecipient, txtVeteranSnapRecipientLocation } = dto;
        //         radio = await page.$(`#optVeteranReceivedSnap_0`)
        //         radio.click();
        //         await page.type(`#txtVeteranSnapPrimaryRecipient`, txtVeteranSnapPrimaryRecipient);
        //         await page.type(`#txtVeteranSnapRecipientLocation`, txtVeteranSnapRecipientLocation);
        //     } else {
        //         radio = page.$(`#optVeteranReceivedSnap_1`);
        //         radio.click();
        //     }
        //     const a = optVeteranDisability ? await page.$(`#optVeteranDisability_0`) : await page.$(`#optVeteranDisability_1`);
        //     a.click();
        //     const b = optVeteranDischarged ? await page.$(`#optVeteranDischarged_0`) : await page.$(`#optVeteranDischarged_1`);
        //     b.click();
        //     const c = optVeteranUnemployed ? await page.$(`#optVeteranUnemployed_0`) : await page.$(`#optVeteranUnemployed_1`);
        //     c.click();
        // } else {
        //     radio = await page.$(`#optVeteran_1`);
        //     await radio.click();
        // }

        // const { optSnap6Months, optSnap3Months } = dto;
        // if (optSnap6Months) {
        //     const { txtSnapPrimaryRecipient, txtSnapRecipientLocation } = dto;
        //     radio = await page.$(`#optSnap6Months_0`);
        //     await radio.click();

        //     await page.type(`#txtSnapPrimaryRecipient`, txtSnapPrimaryRecipient);
        //     await page.type(`#txtSnapRecipientLocation`, txtSnapRecipientLocation);

        // } else {
        //     radio = await page.$(`#optSnap6Months_1`);
        //     await radio.click();
        //     const a = optSnap3Months ? await page.$(`#optSnap3Months_0`) : await page.$(`#optSnap3Months_1`);
        //     a.click();
        // }

        // const { optVocationalRehab, optEmploymentNetwork, optVeteransAffair } = dto;

        // radio = optVocationalRehab ? await page.$(`#optVocationalRehab_0`) : await page.$(`#optVocationalRehab_1`);
        // await radio.click();
        // radio = optEmploymentNetwork ? await page.$(`#optEmploymentNetwork_0`) : await page.$(`#optEmploymentNetwork_1`);
        // await radio.click();
        // radio = optVeteransAffair ? await page.$(`#optVeteransAffair_0`) : await page.$(`#optVeteransAffair_1`);
        // await radio.click();

        // const { optTanf18Months, optTanfAny18Months, optTanfNotEligible, optTanfAny9Months, optExFelon } = dto;

        // if (optTanf18Months) {
        //     const { txtTanfPrimaryRecipient, txtTanfRecipientLocation } = dto;
        //     radio = await page.$(`#optTanf18Months_0`);
        //     await radio.click();

        //     await page.type(`#txtTanfPrimaryRecipient`, txtTanfPrimaryRecipient);
        //     await page.type(`#txtTanfRecipientLocation`, txtTanfRecipientLocation);
        // } else {
        //     radio = await page.$(`#optTanf18Months_1`);
        //     await radio.click();
        // }

        // radio = optTanfAny18Months ? await page.$(`#optTanfAny18Months_0`) : await page.$(`#optTanfAny18Months_1`);
        // await radio.click();
        // radio = optTanfNotEligible ? await page.$(`#optTanfNotEligible_0`) : await page.$(`#optTanfNotEligible_1`);
        // await radio.click();
        // radio = optTanfAny9Months ? await page.$(`#optVetoptTanfAny9Months_0eransAffair_0`) : await page.$(`#optTanfAny9Months_1`);
        // await radio.click();

        // if (optExFelon) {
        //     const { txtConvictionDate, txtReleaseDate, optConvictionType } = dto;
        //     radio = await page.$(`#optExFelon_0`);
        //     await radio.click();

        //     await page.type(`#txtConvictionDate`, txtConvictionDate);
        //     await page.type(`#txtReleaseDate`, txtReleaseDate);

        //     radio = optConvictionType ? await page.$(`#optConvictionType_0`) : await page.$(`#optConvictionType_1`);
        //     await radio.click();
        // } else {
        //     radio = await page.$(`#optExFelon_1`);
        //     await radio.click();
        // }

        // const { optInRuralRenewalCounty, optEmpowermentZone, optReceivedSSI, optUnemployedVeteran6Months, optUnemployedVeteran4Weeks, optLTUrecipient27weeks, txtEligibilitySources } = dto;

        // radio = optInRuralRenewalCounty ? await page.$(`#optInRuralRenewalCounty_0`) : await page.$(`#optInRuralRenewalCounty_1`);
        // await radio.click();

        // radio = optEmpowermentZone ? await page.$(`#optEmpowermentZone_0`) : await page.$(`#optEmpowermentZone_1`);
        // await radio.click();

        // radio = optReceivedSSI ? await page.$(`#optReceivedSSI_0`) : await page.$(`#optReceivedSSI_1`);
        // await radio.click();

        // radio = optUnemployedVeteran6Months ? await page.$(`#optUnemployedVeteran6Months_0`) : await page.$(`#optUnemployedVeteran6Months_1`);
        // await radio.click();

        // radio = optUnemployedVeteran4Weeks ? await page.$(`#optUnemployedVeteran4Weeks_0`) : await page.$(`#optUnemployedVeteran4Weeks_1`);
        // await radio.click();

        // if (optLTUrecipient27weeks) {
        //     const { txtLtuBenefitsState, txtSafStartDate } = dto;
        //     radio = await page.$(`#optLTUrecipient27weeks_0`);
        //     await radio.click();

        //     await page.type(`#txtLtuBenefitsState`, txtLtuBenefitsState);
        //     await page.type(`#txtSafStartDate`, txtSafStartDate);
        // } else {
        //     radio = await page.$(`#optLTUrecipient27weeks_1`);
        //     await radio.click();
        // }
        // await page.type(`#txtEligibilitySources`, txtEligibilitySources);

        await browser.close();
    }
}
