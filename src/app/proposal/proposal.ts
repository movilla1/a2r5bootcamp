export class Proposal {
  constructor(
    public id?: string,
    public customer?: string,
    // tslint:disable-next-line:variable-name
    public portfolio_url: string = 'http://',
    public tools?: string,
    // tslint:disable-next-line:variable-name
    public estimated_hours?: number,
    // tslint:disable-next-line:variable-name
    public hourly_rate?: number,
    // tslint:disable-next-line:variable-name
    public weeks_to_complete?: number,
    // tslint:disable-next-line:variable-name
    public client_email?: string
  ) {}
}
