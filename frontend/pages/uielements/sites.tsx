import React, { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import { Grid, Cell } from 'baseui/layout-grid';
import { IoMdCart } from 'react-icons/io';
import { Block } from 'baseui/block';
import { StyledTable, StyledBodyCell } from 'baseui/table-grid';
import { StyledTableHeadAlt } from 'components/PageStyles/Apps.styled';
import UiElementsMenu from 'components/SideMenu/UiElementsMenu';
import Container from 'components/UiElements/Container/Container';
import Card from 'components/UiElements/Sites/Sites';

import { widgetCardPropsData } from '../../data/uiElementsApiData';

const Sites: NextPage<{}> = () => {
	return (
		<>
			<Head>
				<title>Snapshot | Sites</title>
				<meta name="Description" content="AMR app" />
			</Head>

			<Container>
				<Block paddingTop={['0', '0', '0', '40px']}>
					<Grid gridColumns={12} gridGutters={0} gridMargins={0}>
						<Cell span={[12, 12, 3]}>
							<UiElementsMenu />
						</Cell>
						<Cell span={[12, 12, 9]}>
							<Block paddingTop={['10px', '15px', '30px', '0']}>
								<Block
									paddingBottom="20px"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font650,
													color: $theme.colors.primaryA,
												};
											},
										},
									}}
								>
								</Block>

								<Block paddingBottom="50px" width="105px">
									<Card
										style={{ border:'solid 1px #E02020', width: '105px', height: '77px', backgroundColor:"rgba(224,32,32,0.20);", borderRadius:"7%"}}
										color="#000"
										description="#SECURITY VULNERABILITIES"
										title="7"
										onClick={() =>
											console.log('Reflect Numbers')
										}
									/>
								</Block>
								<Block paddingBottom="50px" width="105px">
									<Card
										style={{ border:'solid 1px #F7B500', width: '105px', height: '77px', backgroundColor:"rgba(247,181,0,0.20)", borderRadius:"7%"}}
										color="#000"
										description="# IPs REMAINING"
										title="321"
										onClick={() =>
											console.log('Reflect Numbers')
										}
									/>
								</Block>
								<Block paddingBottom="50px" width="105px">
									<Card
										style={{ border:'solid 1px #E02020', width: '105px', height: '77px', backgroundColor:"rgba(224,32,32,0.20)", borderRadius:"7%"}}
										color="#000"
										description="# SLA EXPIRED"
										title="10"
										onClick={() =>
											console.log('Reflect Numbers')
										}
									/>
								</Block>
								<Block paddingBottom="50px" width="105px">
									<Card
										style={{ border:'solid 1px #F7B500',  width: '105px', height: '77px', backgroundColor:"rgba(247,181,0,0.20)", borderRadius:"7%"}}
										color="#000"
										description="# SLA APPROACHING"
										title="46"
										onClick={() =>
											console.log('Reflect Numbers')
										}
									/>
								</Block>
								<Block paddingBottom="50px" width="105px">
									<Card
										style={{ border:'solid 1px #F7B500', width: '105px', height: '77px', backgroundColor:"rgba(247,181,0,0.20)", borderRadius:"7%"}}
										color="#000"
										description="# APPROACHING
										MAINTENANCE"
										title="321"
										onClick={() =>
											console.log('Reflect Numbers')
										}
									/>
								</Block>

								<Block
									as="h2"
									paddingBottom="10px"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font650,
													color: $theme.colors.primaryA,
												};
											},
										},
									}}
								>
								</Block>

								<Block
									as="p"
									paddingBottom="30px"
									overrides={{
										Block: {
											style: ({ $theme }) => {
												return {
													...$theme.typography.font200,
													color: $theme.colors.borderInverseOpaque,
												};
											},
										},
									}}
								>
								</Block>

								<Block
									overrides={{
										Block: {
											style: {
												minHeight: '150px',
											},
										},
									}}
								>
									<StyledTable $gridTemplateColumns="150px 250px auto auto auto">
										<StyledTableHeadAlt></StyledTableHeadAlt>
										<StyledTableHeadAlt>Apple Business Contacts</StyledTableHeadAlt>
										<StyledTableHeadAlt>Onsite Business Apple RSM</StyledTableHeadAlt>
										<StyledTableHeadAlt>Site IT Contacts</StyledTableHeadAlt>
										<StyledTableHeadAlt></StyledTableHeadAlt>
										{widgetCardPropsData.map((item, index) => {
											const striped = index % 2 === 0;
											return (
												<Fragment key={index}>
												<StyledBodyCell $striped={striped}>
														{item.property}
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.description}
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.type}
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.default}
													</StyledBodyCell>
													<StyledBodyCell $striped={striped}>
														{item.version && item.version}
													</StyledBodyCell>
												</Fragment>
											);
										})}
									</StyledTable>
								</Block>
							</Block>
						</Cell>
					</Grid>
				</Block>
			</Container>
		</>
	);
};

export default Sites;
