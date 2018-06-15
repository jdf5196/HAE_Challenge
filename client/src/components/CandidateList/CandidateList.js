import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Candidate from './Candidate.js';
import "./CandidateList.css";
import * as CandidateListActions from "../../actions/actions.js";
import { apiGET, sortArrObjs, apiPATCH } from "../../utils/helpers.js";

class CandidateList extends Component{
    async getCandidates() {
        const candidates = await apiGET();
        this.props.actions.getCandidates({candidates});
    }
    sort(type){
        let order;
        if(this.props.sort.parameter === "none" || this.props.sort.parameter !== type || (this.props.sort.parameter === type && this.props.sort.order === 'ascending')){
        order = "decending"
        }else{
        order = "ascending"
        }
        const candidates = sortArrObjs(this.props.candidates, type, order);
        const sorted = {parameter:type, order:order}
        this.props.actions.sortCandidates({candidates, sorted});
    }
    changeSelect(e){
        this.props.actions.filterCandidates(e.target.value)
    }
    async updateStatus(id, value, index){
        const candidate = await apiPATCH(id, value);
        this.props.actions.updateCandidateStatus(candidate, index);
    }
    componentDidMount() {
        this.getCandidates();
    }
    render(){
        const list = this.props.candidates.map((person, index)=>{
            return <Candidate filtertype={this.props.filter} updateStatus={this.updateStatus.bind(this)} candidate={person} index={index} key={index} />
        });
        return(
            <table>
                <tbody>
                    <tr>
                        <th><p onClick={()=>{this.sort('name')}} className='link'>Name</p></th>
                        <th><p>Description</p></th>
                        <th><p className='link' onClick={()=>{this.sort('years_exp')}}>Years of Experience</p></th>
                        <th><p className='link' onClick={()=>{this.sort('status')}}>Status</p>
                            <select onChange={this.changeSelect.bind(this)}>
                                <option value='All'>All</option>
                                <option value='Reviewed'>Reviewed</option>
                                <option value='Not Reviewed'>Not Reviewed</option>
                            </select>
                        </th>
                        <th><p className='link' onClick={()=>{this.sort('date_applied')}}>Date Applied</p></th>
                        <th><p>Update Status</p></th>
                    </tr>
                    {list}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    candidates: state.candidates,
    sort: state.sort,
    filter: state.filter
  })
  
  const mapDispatchToProps = dispatch => ({
      actions: bindActionCreators(CandidateListActions, dispatch)
  })
  
  const CandidateListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CandidateList);

  export default CandidateListContainer;