import { useRouter } from 'next/router'
import useSWR, { mutate } from 'swr';
import PollLayout from '../../components/poll_layout'
import React, {useState } from 'react'
import styles from '../../styles/Home.module.css';
import CheckFormGroup from '../../components/check-form-group';
import PageHead from '../../components/page-head';
import pollstyles from "../../styles/Poll.module.css";


const fetcher = async (url) => {
  const res = await fetch(url)
	const data = await res.json()
  
	if (res.status !== 200) {
		console.log(res.status)
		throw new Error(data.message)
	}
	return data
}


export default function Poll() {
	const { query } = useRouter();
	const url = '/api/getpoll';
	const { data, error } = useSWR(
		() =>  '/api/getpoll',
		fetcher,
		);
	const [voted, setVoted]  = useState(false);
	var totalVotes = 0;
		
	if (error) return <div>{ error.message }</div>;
	if (!data) return <div>Loading...</div>
	if (data) {
		data.map((item) => {
			totalVotes += item.votes;
		})
	}
	
	const submitVote = (e) => {
		if(voted === false) {
			const voteSelected = e.target.dataset.id;
			const voteCurrent = data[voteSelected].votes;
			data[voteSelected].votes = voteCurrent + 1;
			//setTotalVotes(totalVotes + 1);
			setVoted(!voted);
			const options = {
				method: "POST",
				body: JSON.stringify(data),
				headers: { "Content-Type": "application/json" },
			};
			console.log(options);
			fetch(url, options)
			.then((res) => res.json())
			.then((res) => console.log(res));
		}
	}
	
	
	let pollOptions;
	if (data) {
		pollOptions = data.map((item) => {
			return (
				<li key={item.id}>
					<div className={pollstyles.displayVotes} style="--votes:{item.votes}'" data-totalVotes={totalVotes}>
					</div>
					<button onClick={submitVote} data-id={item.id}>
							{item.option}
							<span>- {item.votes} Votes</span>
					</button>          
        		</li>
  	  		);
    	});
	}



	return(
		<div className={styles.container}>
			<PageHead title="Besti ísinn í Árborg?"></PageHead>
			<div className={styles.main}>
				<div className={pollstyles.poll}>
					<h1>Besti ísinn í Árborg?</h1>
					<ul className={voted ? pollstyles.results : pollstyles.voted}>
						{pollOptions}
					</ul>
				</div>

			</div>
		</div>
  );
}