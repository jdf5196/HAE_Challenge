import React from 'react';

const Candidate = (props)=>{
    let formValue = null;
    const date = ()=>{
        let d = new Date(props.candidate.date_applied);
        return d.toLocaleDateString("en-US");
    }
    const updateForm = (event)=>{
        formValue=event.target.value;
    }
    const updateCandidateStatus = (event)=>{
        event.preventDefault();
        if(!formValue){
            return
        }
        props.updateStatus(props.candidate.id, formValue, props.index)
    }
    const updateCheckbox = ()=>{
        if(props.candidate.reviewed){
            return ""
        }else{
            return (<form id={props.candidate.name} onChange={updateForm} onSubmit={updateCandidateStatus}>
                        <input className='radioInput' type='radio' name='status' value='accepted' />Accept<br />
                        <input className='radioInput' type='radio' name='status' value='rejected' />Reject<br />
                        <button className='submitButton' name='status' type='submit'>Submit</button>
                    </form>
            )
        }
    }
    const candidateClass = ()=>{
        if((props.candidate.reviewed && props.filtertype === "Reviewed") || props.filtertype === "All" || (!props.candidate.reviewed && props.filtertype === "Not Reviewed")){
            return 'show'
        }else{
            return 'hid'
        }
    }
    return(
        <tr className={candidateClass()}>
            <td>{props.candidate.name}</td>
            <td>{props.candidate.description}</td>
            <td>{props.candidate.years_exp}</td>
            <td>{props.candidate.status}</td>
            <td>{date()}</td>
            <td>{updateCheckbox()}</td>
        </tr>
    )
}

export default Candidate;