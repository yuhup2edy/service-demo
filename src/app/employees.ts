export interface IEmployees
{
    id : number,
    employee_name : String,
    employee_salary : number,
    employee_age : number,
    profile_image : ImageBitmap
}


export interface IResponse
{
    status : string,
    data : IEmployees[]
}