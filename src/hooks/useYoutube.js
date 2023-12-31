import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const fetchYoutube = async () => {
	const api_key = process.env.REACT_APP_YOUTUBE_API;
	const baseURL = 'https://www.googleapis.com/youtube/v3/playlistItems';
	const pid = 'PLnBZ3Abl_z0P_UBpTwJ6-ev9qUBGbvKSb';
	const num = 7;
	const resultURL = `${baseURL}?key=${api_key}&part=snippet&playlistId=${pid}&maxResults=${num}`;

	const { data } = await axios.get(resultURL);
	return data.items;
};

// react-query에는 쿼리키를 문자열로 지정해서 데이터 호출시 쿼리키가 동일하면 동일한 데이터로 인지해서
// refetching처리하지 않고 캐싱되어 있는 데이터를 재활용
// useQuery([쿼리키], fetching함수. 캐싱옵션)
// react-query에서 쓰이는 데이터 상태 개념

// pending : 데이터 요청을 보내고 응답을 받기까지의 상태
// fresh : 작업자가 직접 지정한 데이터의 신선한 상태
// stale : 작업자가 직접 지정한 데이터의 신선하지 못한 옛날 데이터의 상태
// inactive : 해당 컴포넌트에서 리액터쿼리로 관리하고 있는 데이터를 활용하고 있지 않은 비활성화 상태

// 비동기데이터가 inactive가 되면 무조건 캐시타임이 카운트됨
// inactive가 아닌 상태에서 data가 stale상태면 refatching발생
// inactvie상태가 아니고 아직 fresh상태이면 refetching발생 안함

// react-query로 관리하는 서버 데이터가 만약 24시간 주기로 변경된다고 하면
// staleTime을 24시간으로 지정해서 24시간안에는 데이터를 refetching하지 않도록 처리
export const useYoutubeQuery = () => {
	return useQuery(['youtubeData'], fetchYoutube, {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		cacheTime: 1000 * 10,
		staleTime: 1000 * 10,
	});
};
