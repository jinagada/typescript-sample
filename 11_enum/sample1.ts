enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}

function isItSummer(month: Month) {
    let isSummer: boolean;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}

console.log(isItSummer(Month.Jun));

enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}

const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
};

if (request.status == ApprovalStatus.approved) {
    console.log('Send email to the Applicant...');
}
