export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolioUrl: string = 'http://',
    public tools?: string,
    public estimatedHours?: number,
    public hourlyRate?: number,
    public weeksToComplete?: number,
    public clientEmail?: string
  ) {}
}
