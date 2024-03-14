
interface IProps {
    params: {
        name: string;
    }

}


export default function({ params }: IProps) {

    //console.log(props.params.name);

    //let { params } = props;


    return (
        <h1>Hello {params.name}. This is profile page.   this is dynamic page because of the folder name is [] as [name] which make this file dynamic</h1>
    )
}
