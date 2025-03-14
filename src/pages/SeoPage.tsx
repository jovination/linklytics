
import React from 'react';
import { DashboardSidebar } from '@/components/layout/DashboardSidebar';
import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SeoAnalyzer from '@/components/features/SeoAnalyzer';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart, 
  Search, 
  FileText, 
  Link, 
  PieChart, 
  Activity,
  Share2
} from 'lucide-react';

const SeoPage = () => {
  return (
    <div className="grid lg:grid-cols-[280px_1fr] h-screen">
      <div className="hidden lg:block">
        <DashboardSidebar />
      </div>
      <div className="flex flex-col h-screen overflow-auto">
        <DashboardHeader 
          title="SEO & Performance Analysis" 
          showSearch={true}
        />
        <main className="flex-1 p-4 md:p-6">
          <div className="space-y-6">
            {/* SEO Overview Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">Average SEO Score</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="text-2xl font-bold">82<span className="text-sm font-normal text-muted-foreground">/100</span></div>
                  <p className="text-xs text-muted-foreground">
                    Based on your recent scans
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">Pages Scanned</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    This month
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">SEO Issues</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="text-2xl font-bold">18</div>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge variant="destructive" className="text-[10px]">5 Critical</Badge>
                    <Badge variant="outline" className="text-[10px] bg-amber-100 text-amber-700 border-amber-200">13 Warnings</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">Avg. Load Time</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Activity className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="text-2xl font-bold">1.4s</div>
                  <p className="text-xs text-emerald-500">
                    0.2s faster than industry average
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* SEO Quick Stats */}
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">Meta Information</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pages with meta title</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pages with meta description</span>
                      <span className="font-medium">78%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Pages with canonical URLs</span>
                      <span className="font-medium">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">Link Analysis</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Link className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Internal links</span>
                      <span className="font-medium">145</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">External links</span>
                      <span className="font-medium">32</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Broken links</span>
                      <span className="font-medium text-destructive">7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-primary/10">
                <CardHeader className="flex flex-row items-center justify-between p-4 pb-2">
                  <CardTitle className="text-sm font-medium">Backlinks Overview</CardTitle>
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Share2 className="h-4 w-4 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total backlinks</span>
                      <span className="font-medium">127</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Referring domains</span>
                      <span className="font-medium">43</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">New this month</span>
                      <span className="font-medium text-emerald-500">+8</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* SEO Analysis Tool */}
            <Card className="border-primary/10">
              <CardHeader className="p-4 pb-2">
                <CardTitle>SEO & Performance Analyzer</CardTitle>
                <CardDescription>
                  Analyze any webpage for SEO and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <SeoAnalyzer />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SeoPage;
