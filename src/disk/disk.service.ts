import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerSerice: PowerService){}

    public async getData(){
        this.powerSerice.supplyPower(30)
        return await "Data!"
    }

}
