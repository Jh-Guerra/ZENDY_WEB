import axios from '../../utils/axios';
import config from "../../config/Config";
import { defaultHeaders, getCustomUrl } from 'utils/common';

const apiPrefix = config.apiVersion + "entry-queries";

class EntryQueryService {    
    async createEntryQuery(data) {
        return await axios.post( getCustomUrl(apiPrefix, `/register`), data, defaultHeaders() );
    }

    async findEntryQuery(id) {
        return await axios.get( getCustomUrl(apiPrefix, `/find/${id}`), defaultHeaders() );
    }

    async listEntryQueries(term) {
        return await axios.get( getCustomUrl(apiPrefix, `/list?term=${term}`), defaultHeaders());
    }

    async listPendingQueries(term) {
        return await axios.get( getCustomUrl(apiPrefix, `/list-pendings?term=${term}`), defaultHeaders());
    }

    async deleteEntryQuery(id) {
        return await axios.delete( getCustomUrl(apiPrefix, `/delete/${id}`), defaultHeaders() )
    }

    async listQueries(term, status) {
        return await axios.get( getCustomUrl(apiPrefix, `/list-query/${status || 'Pendiente'}?term=${term}`), defaultHeaders());
    }

    async updateEntryQuery(id, data) {
        return await axios.post( getCustomUrl(apiPrefix, `/update/${id}`), data, defaultHeaders());
    }

    async acceptEntryQuery(id, byRecommend) {
        return await axios.post( getCustomUrl(apiPrefix, `/accept/${id}`), { byRecommend }, defaultHeaders());
    }

    async recommendUser(userIds, idEntryQuery) {
        return await axios.post( getCustomUrl(apiPrefix, `/${idEntryQuery}/recommend`), userIds, defaultHeaders());
    }

    async deleteImage(imageLink,id) {
        return await axios.post( getCustomUrl(apiPrefix, `/deleteImage`), {imageLink,id}, defaultHeaders() )
    }

}

export default EntryQueryService;