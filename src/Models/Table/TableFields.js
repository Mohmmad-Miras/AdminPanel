export const datainfoCategory =[
                                 {field:"id" , title:"#"},
                                 {field:"title" , title:"عنوان"},
                                 {field:"status" , title:"وضعیت"}
                                ]
export const Fieldoperation = (num)=>
{
    return(
        <>
        <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
        <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_category_modal"></i>
        <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
        </>
    );
}                     

export const  FilterSearchCategory ={
    field:"title"
}

export const datainfoProduct =[
    {field:"id" , title:"#"},
    {field:"title" , title:"عنوان"},
    {field:"category" ,title:"عنوان دسته بندی"},   
    {field:"price" , title :"قیمت"} ,
    {field:"stock",title:"موجودی"},
    {field:"numLike",title:"تعداد لایک"},
    {field:"status" , title:"وضعیت"},   
   ]

 export const datainfoCompany=[
    {field:"id" , title:"#"},
    {field:"Name" , title:"عنوان"},
    {field:"Logo" ,title:"لوگو"},   
    {field:"Description" , title :"توضیحات"}
    ]  

 export const  FilterSearchCompany ={
        field:"Name"
    }   

export const datainfocolor =[
    {field:"id" , title:"#"},
    {field:"title" ,title:"عنوان"},
    {field:"ColorCode" ,title:"کد رنگ"},
    {field:"Color" , title:"رنگ"}
]
export const FieldoperationDelete = (num)=>
{
    return(
        <>
        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" 
            title="حذف" 
            data-bs-toggle="tooltip" 
            data-bs-placement="top"></i>
        </>
    );
} 