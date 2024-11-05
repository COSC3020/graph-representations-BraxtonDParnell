function convertToAdjList(adjMatrix) {
	let AdjList = [];
	for (let i = 0; i < adjMatrix.length; i++) {
		for (let j = 0; j < adjMatrix[i].length; j++) {
			if (adjMatrix[i][j] == 1) { //if there is an edge
                if (!AdjList[i]) { 		//adds the array for edges if the current vertex has an edge and there isn't an array yet.
						//we only need an arry if edges exist for a vertex, don't add an array for a vertex with no edges.
                    AdjList[i] = [];
                }
                AdjList[i].push(j);		//adds the edge
			}
		}
	}
return AdjList;
}
