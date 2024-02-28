import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private readonly powerService: PowerService) {}

    public async compute(data) {
        return await this.powerService.supplyPower(data)
    }


}
