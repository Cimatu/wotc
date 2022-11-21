import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Form from './forms.entity';
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import puppeteer from 'puppeteer-extra';
import select from 'puppeteer-select'
import { CreateFormDto } from './dto/create-form.dto';
import { ElementHandle } from 'puppeteer';
import { from } from 'rxjs';

@Injectable()
export class FormsService {
    constructor(
        @InjectRepository(Form)
        private readonly formRepository: Repository<Form>,
    ) { }

    async fillTheForm() {
        const browser = await puppeteer
            .use(StealthPlugin())
            .launch({
                headless: false,
                executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',

            })
        const page = await browser.newPage();

        await page.goto('https://eddservices.edd.ca.gov/ewotc/secure/')

        await page.type('#username', 'wotcwiz22');
        await page.type('#txtPassword', 'Wotcwiz22!');
        await page.keyboard.press('Enter');

        await page.waitForNavigation();

        await page.goto('https://eddservices.edd.ca.gov/ewotc/secure/NewApplication.aspx');


        await page.type(`#txtFirstName`, 'Paul');
        await page.type(`#txtLastName`, 'Smith');
        await page.type(`#txtSSN`, '123456789');
        await page.type(`#txtStreet`, 'Bevelry Hills');
        await page.type(`#txtCity`, 'Bevelry Hills');
        await page.type(`#txtState`, 'CA');
        await page.type(`#txtZip`, '12312');


        // const { txtFirstName, txtLastName, txtSSN, txtStreet, txtCity, txtState, txtZip } = dto;
        // await page.type(`#txtFirstName`, 'txtFirstName');
        // await page.type(`#txtLastName`, 'txtLastName');
        // await page.type(`#txtSSN`, 'txtSSN');
        // await page.type(`#txtStreet`, 'txtStreet');
        // await page.type(`#txtCity`, 'txtCity');
        // await page.type(`#txtState`, 'txtState');
        // await page.type(`#txtZip`, 'txtZip');

        // const { txtFEIN, txtErName, txtErPhone, txtErStreet, txtErCity, txtErState, txtErZip } = dto;
        await page.type(`#txtFEIN`, '123456789');
        await page.type(`#txtErName`, 'Paul Smith');
        await page.type(`#txtErPhone`, '1234567890');
        await page.type(`#txtErStreet`, 'Bevelry Hills 90210');
        await page.type(`#txtErCity`, 'Bevelry Hills');
        await page.type(`#txtErState`, 'CA');
        await page.type(`#txtErZip`, '12345');

        // const { txtContactName, txtContactPhone, txtContactStreet, txtContactCity, txtContactState,
        //     txtContactZip, ddlGroupNumber, txtInfoDate, txtOfferDate, txtHireDate, txtStartDate } = dto;
        await page.type(`#txtContactName`, 'Contac Name');
        await page.type(`#txtContactPhone`, '9161231234');
        await page.type(`#txtContactStreet`, 'AVLABARI 8');
        await page.type(`#txtContactCity`, 'Bevelry Hills');
        await page.type(`#txtContactState`, 'CA');
        // await page.type(`#txtContactZip`, '12345');
        await page.select(`#ddlGroupNumber`, '4');
        await page.type(`#txtInfoDate`, '10/01/2022');
        await page.type(`#txtOfferDate`, '10/01/2022');
        await page.type(`#txtHireDate`, '10/01/2022');
        await page.type(`#txtStartDate`, '10/29/2022');

        // const { chkItem1, chkItem2, chkItem3, chkItem4, chkItem5, chkItem6, chkItem7 } = dto;

        let checkbox;
        // if (chkItem1) {
        checkbox = await page.$(`#chkItem1`);
        await checkbox.click();
        // }
        // if (chkItem2) {
        checkbox = await page.$(`#chkItem2`);
        await checkbox.click();
        // }
        // if (chkItem3) {
        checkbox = await page.$(`#chkItem3`);
        await checkbox.click();
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
        checkbox = await page.$(`#chkItem6`);
        await checkbox.click();
        // }
        // if (chkItem7) {
        //     checkbox = await page.$(`#chkItem7`);
        //     await checkbox.click();
        // }

        const nestPage = await page.$(`#StartNextButton`);
        await nestPage.click();
        await page.waitForNavigation();


        // const { optPreviousEmployer, txtLastEmploymentDate, txtStartWage, ddlOccupation, optVeteran } = dto;

        let radio;
        // if (optPreviousEmployer) {
        radio = await page.$(`#optPreviousEmployer_0`);
        await radio.click();
        await page.type(`#txtLastEmploymentDate`, '12/12/2009');
        // } else {
        //     radio = await page.$(`#optPreviousEmployer_1`);
        //     await radio.click();
        // }

        await page.type(`#txtStartWage`, '12.50');
        await page.select(`#ddlOccupation`, 'Architecture & Engineering');


        radio = await page.$(`#optAgeUnder40_0`);
        await radio.click();
        await page.type(`#txtBirthDate`, '12/12/1999');



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
        radio = await page.$(`#optVeteran_1`);
        await radio.click();
        // }

        // const { optSnap6Months, optSnap3Months } = dto;
        // if (optSnap6Months) {
        //     const { txtSnapPrimaryRecipient, txtSnapRecipientLocation } = dto;
        //     radio = await page.$(`#optSnap6Months_0`);
        //     await radio.click();

        //     await page.type(`#txtSnapPrimaryRecipient`, txtSnapPrimaryRecipient);
        //     await page.type(`#txtSnapRecipientLocation`, txtSnapRecipientLocation);

        // } else {
        radio = await page.$(`#optSnap6Months_1`);
        await radio.click();
        radio = await page.$(`#optSnap3Months_1`);
        await radio.click();
        //     const a = optSnap3Months ? await page.$(`#optSnap3Months_0`) : await page.$(`#optSnap3Months_1`);
        //     a.click();
        // }

        // const { optVocationalRehab, optEmploymentNetwork, optVeteransAffair } = dto;


        radio = false ? await page.$(`#optVocationalRehab_0`) : await page.$(`#optVocationalRehab_1`);
        await radio.click();
        radio = false ? await page.$(`#optEmploymentNetwork_0`) : await page.$(`#optEmploymentNetwork_1`);
        await radio.click();
        radio = false ? await page.$(`#optVeteransAffair_0`) : await page.$(`#optVeteransAffair_1`);
        await radio.click();

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
        radio = await page.$(`#optTanf18Months_1`);
        await radio.click();
        // }


        radio = false ? await page.$(`#optTanfAny18Months_0`) : await page.$(`#optTanfAny18Months_1`);
        await radio.click();
        radio = false ? await page.$(`#optTanfNotEligible_0`) : await page.$(`#optTanfNotEligible_1`);
        await radio.click();
        radio = false ? await page.$(`#optVetoptTanfAny9Months_0eransAffair_0`) : await page.$(`#optTanfAny9Months_1`);
        await radio.click();

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
        radio = await page.$(`#optExFelon_1`);
        await radio.click();
        // }

        // const { optInRuralRenewalCounty, optEmpowermentZone, optReceivedSSI, optUnemployedVeteran6Months, optUnemployedVeteran4Weeks, optLTUrecipient27weeks, txtEligibilitySources } = dto;


        radio = false ? await page.$(`#optInRuralRenewalCounty_0`) : await page.$(`#optInRuralRenewalCounty_1`);
        await radio.click();

        radio = false ? await page.$(`#optEmpowermentZone_0`) : await page.$(`#optEmpowermentZone_1`);
        await radio.click();

        radio = false ? await page.$(`#optReceivedSSI_0`) : await page.$(`#optReceivedSSI_1`);
        await radio.click();

        radio = false ? await page.$(`#optUnemployedVeteran6Months_0`) : await page.$(`#optUnemployedVeteran6Months_1`);
        await radio.click();

        radio = false ? await page.$(`#optUnemployedVeteran4Weeks_0`) : await page.$(`#optUnemployedVeteran4Weeks_1`);
        await radio.click();

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
        radio = await page.$(`#optLTUrecipient27weeks_1`);
        await radio.click();
        // }
        // await page.type(`#txtEligibilitySources`, txtEligibilitySources);

        await browser.close();
    }

    async filterForms(filter) {
        const forms = await this.getAllForms();
        return forms.filter((el) => {
            if (el.txtFirstName.includes(filter) || el.txtLastName.includes(filter)) {
                return el;
            }
        })
    }

    async getAllForms() {
        return await this.formRepository
            .createQueryBuilder('forms')
            .getMany();
    }

    async getFormWithPagination(take: number = 10, skip: number = 0) {
        return from(
            this.formRepository.findAndCount({ relations: [], take, skip }).then((data) => data)
        );
    }

    async getCSV() {

    }
}
