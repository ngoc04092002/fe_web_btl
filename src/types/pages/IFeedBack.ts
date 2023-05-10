interface IFeedbackMonthAndAmountData {
	month: number;
	amount: number;
}

export interface IFeedbackReportData {
	smiles: IFeedbackMonthAndAmountData[];
	meh: IFeedbackMonthAndAmountData[];
	frown: IFeedbackMonthAndAmountData[];
}
